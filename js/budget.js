/*=========================================
            Money Manager
             budget.js
==========================================*/

let todayLimit = 0;
let todaySpentAmount = 0;
let carryDebt = 0;
let extraBalance = 0;

/*==============================*/

function initializeBudget() {

    const savedToday = localStorage.getItem("today_date");
    const today = getToday();

    if (savedToday !== today) {

        newDay();

        localStorage.setItem("today_date", today);

    } else {

        loadTodayData();

    }

    updateBudgetUI();

}

/*==============================*/

function loadTodayData() {

    todayLimit = Number(localStorage.getItem("today_limit")) || app.dailyLimit;

    todaySpentAmount = Number(localStorage.getItem("today_spent")) || 0;

    carryDebt = Number(localStorage.getItem("carry_debt")) || 0;

    extraBalance = Number(localStorage.getItem("extra_balance")) || 0;

}

/*==============================*/

function saveTodayData() {

    localStorage.setItem("today_limit", todayLimit);

    localStorage.setItem("today_spent", todaySpentAmount);

    localStorage.setItem("carry_debt", carryDebt);

    localStorage.setItem("extra_balance", extraBalance);

}

/*==============================*/

function newDay() {

    loadTodayData();

    extraBalance += (todayLimit + carryDebt);

    if (todayLimit > 0) {

    }

    todayLimit = app.dailyLimit;

    if (carryDebt > 0) {

        if (carryDebt >= todayLimit) {

            carryDebt -= todayLimit;

            todayLimit = 0;

        } else {

            todayLimit -= carryDebt;

            carryDebt = 0;

        }

    }

    todaySpentAmount = 0;

    saveTodayData();

}

/*==============================*/

function addExpenseMoney(amount) {

    amount = Number(amount);

    if (amount <= 0) return;

    todaySpentAmount += amount;

    app.budget -= amount;
saveData();

app.history.push({
    id: uid(),
    amount: amount,
    created: getNow()
});

saveData();

    let remain = amount;

    if (todayLimit > 0) {

        if (remain >= todayLimit) {

            remain -= todayLimit;

            todayLimit = 0;

        } else {

            todayLimit -= remain;

            remain = 0;

        }

    }

    if (remain > 0 && extraBalance > 0) {

        if (remain >= extraBalance) {

            remain -= extraBalance;

            extraBalance = 0;

        } else {

            extraBalance -= remain;

            remain = 0;

        }

    }

    if (remain > 0) {

        carryDebt += remain;

    }

    saveTodayData();
    renderHistory();
    updateBudgetUI();

}

/*==============================*/

function getRemainingBudget() {

    let totalExpense = 0;

    app.history.forEach(item => {
        totalExpense += Number(item.amount);
    });

    return Math.max(0, app.budget - totalExpense);

}

/*==============================*/

function getProgressPercent() {

    if (app.budget <= 0) return 0;

    const used = app.budget - getRemainingBudget();

    return Math.min(100, (used / app.budget) * 100);

}

/*==============================*/

function updateBudgetUI() {

    if (budgetValue)
        budgetValue.textContent = money(app.budget);

    if (dailyValue)
        dailyValue.textContent = money(app.dailyLimit);

    if (todaySpent)
        todaySpent.textContent = money(todaySpentAmount);

    if (remainingMoney)
        remainingMoney.textContent = money(todayLimit);

    if (extraMoney)
        extraMoney.textContent = money(extraBalance);

    if (todayRemain)
        todayRemain.textContent = money(todayLimit);

    if (progressBar)
        progressBar.style.width = getProgressPercent() + "%";

    if (progressText)
        progressText.textContent = Math.floor(getProgressPercent()) + "%";

    saveTodayData();

}

/*==============================*/

function setBudget(budget, daily) {

    app.budget = Number(budget);

    app.dailyLimit = Number(daily);

    todayLimit = app.dailyLimit;

    todaySpentAmount = 0;

    carryDebt = 0;

    extraBalance = 0;

    app.history = [];

    saveData();

    saveTodayData();

    updateBudgetUI();

}