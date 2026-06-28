/*=========================================
            Money Manager
               ui.js
==========================================*/

function refreshUI() {

    const resetTimeEl = document.getElementById("resetTime");

if(resetTimeEl){

    resetTimeEl.textContent = getNextResetTime();

}

    updateBudgetUI();

    renderHistory();

}

/*=========================================*/

function setupEvents() {

    const extraInput = document.getElementById("extraInput");
    const addExtraBtn = document.getElementById("addExtraBtn");

if(addExtraBtn){

    addExtraBtn.addEventListener("click", () => {

        const value = Number(extraInput.value);

        if(!value || value <= 0){

            showToast("مبلغ نامعتبر است", "#e74c3c");

            return;

        }

        extraBalance += value;

        saveTodayData();

        updateBudgetUI();

        extraInput.value = "";

        showToast("به مبلغ اضافی اضافه شد");

    });

}

    if (saveSetup) {

        saveSetup.addEventListener("click", () => {

            const budget = Number(budgetInput.value);

            const daily = Number(dailyLimitInput.value);

            if (budget <= 0 || daily <= 0) {

                showToast("مقادیر معتبر وارد کنید", "#e74c3c");

                return;

            }

            setBudget(budget, daily);

            showToast("اطلاعات ذخیره شد");

            refreshUI();

        });

    }

    if (addExpense) {

        addExpense.addEventListener("click", () => {

            const amount = Number(expenseInput.value);

            if (amount <= 0) {

                showToast("مبلغ نامعتبر است", "#e74c3c");

                return;

            }

            addExpenseMoney(amount);

            expenseInput.value = "";

            renderHistory();

            showToast("خرج ثبت شد");

        });

    }

    if (expenseInput) {

        expenseInput.addEventListener("keypress", function(e){

            if(e.key==="Enter"){

                addExpense.click();

            }

        });

    }

}

/*=========================================*/

window.addEventListener("load",()=>{

    initializeStorage();

    initializeBudget();

    refreshUI();

    setupEvents();

    startResetTimer();

});

if (resetAll) {

    resetAll.addEventListener("click", () => {

        if (!confirm("کل اطلاعات پاک شود؟")) return;

        localStorage.clear();

        app.budget = 0;
        app.dailyLimit = 0;
        app.history = [];
        app.extraBalance = 0;
        app.lastOpen = "";
        app.createdAt = "";

        todayLimit = 0;
        todaySpentAmount = 0;
        carryDebt = 0;
        extraBalance = 0;

        saveData();
        saveTodayData();

        refreshUI();

        showToast("ریست کامل انجام شد", "#e74c3c");

    });

}

let resetTimerInterval = null;

function startResetTimer(){

    if(resetTimerInterval) return;

    resetTimerInterval = setInterval(() => {

        const resetTimeEl = document.getElementById("resetTime");

        if(resetTimeEl){

            resetTimeEl.textContent = getNextResetTime();

        }

    }, 1000);

}