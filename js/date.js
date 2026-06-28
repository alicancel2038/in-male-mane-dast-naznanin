/*=========================================
            Money Manager
               date.js
==========================================*/

function getToday() {

    const d = new Date();

    return d.toISOString().split("T")[0];

}