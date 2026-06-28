/*=========================================
            Money Manager
             history.js
==========================================*/

function renderHistory() {

    if (!historyBody) return;

    historyBody.innerHTML = "";

    if (app.history.length === 0) {

        historyBody.innerHTML = `
            <tr>
                <td colspan="3">هیچ خرجی ثبت نشده است.</td>
            </tr>
        `;

        return;
    }

    const list = [...app.history].reverse();

    list.forEach(item => {

        const tr = document.createElement("tr");

        tr.innerHTML = `

            <td>${formatDate(item.created)}</td>

            <td>${money(item.amount)}</td>

            <td>

                <button onclick="deleteExpense('${item.id}')">

                    حذف

                </button>

            </td>

        `;

        historyBody.appendChild(tr);

    });

}

/*=========================================*/

function deleteExpense(id) {

    const expense = app.history.find(item => item.id === id);

    if (!expense) return;

    if (!confirm("این خرج حذف شود؟")) return;

    app.history = app.history.filter(item => item.id !== id);

    saveData();

    updateBudgetUI();

    renderHistory();

    showToast("خرج حذف شد");

}

/*=========================================*/

function clearAllHistory() {

    if (!confirm("تمام تاریخچه حذف شود؟")) return;

    app.history = [];

    saveData();

    renderHistory();

    updateBudgetUI();

    showToast("تاریخچه پاک شد");

}

/*=========================================*/

if (clearHistory) {

    clearHistory.addEventListener("click", clearAllHistory);

}