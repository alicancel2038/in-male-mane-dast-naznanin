/*=========================================
            Money Manager
             config.js
==========================================*/

/*========== LocalStorage Key ==========*/

const STORAGE_KEY = "money_manager_v1";

/*========== App Database ==========*/

let app = {

    budget:0,

    dailyLimit:0,

    extraBalance:0,

    history:[],

    lastOpen:"",

    createdAt:"",

    version:1

};

/*========== HTML Elements ==========*/

const budgetInput = document.getElementById("budgetInput");

const dailyLimitInput = document.getElementById("dailyLimitInput");

const saveSetup = document.getElementById("saveSetup");

const budgetValue = document.getElementById("budgetValue");

const dailyValue = document.getElementById("dailyValue");

const todaySpent = document.getElementById("todaySpent");

const todayRemain = document.getElementById("todayRemain");

const todayDate = document.getElementById("todayDate");

const remainingMoney = document.getElementById("remainingMoney");

const extraMoney = document.getElementById("extraMoney");

const expenseInput = document.getElementById("expenseInput");

const addExpense = document.getElementById("addExpense");

const historyBody = document.getElementById("historyBody");

const progressBar = document.getElementById("progressBar");

const progressText = document.getElementById("progressText");

const clearHistory = document.getElementById("clearHistory");

const resetAll = document.getElementById("resetAll");

const exportPDF = document.getElementById("exportPDF");

const exportExcel = document.getElementById("exportExcel");

const toast = document.getElementById("toast");

/*========== Runtime Values ==========*/

let state = {

    remaining: 0,

    extra: 0,

    todaySpent: 0,

    todayRemain: 0,

    progress: 0

};