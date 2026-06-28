/*=========================================
            Money Manager
              app.js
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeStorage();

    initializeBudget();

    refreshUI();

    setupEvents();

    console.log("Money Manager Ready ✔");

});