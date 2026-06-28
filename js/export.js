/*=========================================
            Money Manager
            export.js
==========================================*/

function exportToCSV() {

    if (app.history.length === 0) {

        showToast("تاریخچه‌ای برای خروجی وجود ندارد", "#e74c3c");

        return;

    }

    let csv = "تاریخ,مبلغ\n";

    app.history.forEach(item => {

        csv += `"${formatDate(item.created)}","${item.amount}"\n`;

    });

    const blob = new Blob(["\uFEFF" + csv], {

        type: "text/csv;charset=utf-8;"

    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "MoneyManager.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}

/*=========================================*/

function exportToPDF() {

    window.print();

}

/*=========================================*/

if (exportExcel) {

    exportExcel.addEventListener("click", exportToCSV);

}

if (exportPDF) {

    exportPDF.addEventListener("click", exportToPDF);

}