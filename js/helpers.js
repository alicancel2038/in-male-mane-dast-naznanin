/*=========================================
            Money Manager
             helpers.js
==========================================*/

/*========== Number Format ==========*/

function money(value){

    value = Number(value || 0);

    return value.toLocaleString("fa-IR") + " تومان";

}

/*========== Today ==========*/

function getToday(){

    const date = new Date();

    const year = date.getFullYear();

    const month = String(date.getMonth()+1).padStart(2,"0");

    const day = String(date.getDate()).padStart(2,"0");

    return `${year}-${month}-${day}`;

}

/*========== Date & Time ==========*/

function getNow(){

    return Date.now();

}

/*========== Format Date ==========*/

function formatDate(timestamp){

    return new Date(timestamp).toLocaleString("fa-IR");

}

/*========== Unique ID ==========*/

function uid(){

    return Date.now().toString(36) +

    Math.random().toString(36).substring(2,8);

}

/*========== Days Between ==========*/

function daysBetween(first,second){

    const oneDay = 86400000;

    const a = new Date(first);

    const b = new Date(second);

    a.setHours(0,0,0,0);

    b.setHours(0,0,0,0);

    return Math.floor((b-a)/oneDay);

}

/*========== Clamp ==========*/

function clamp(number,min,max){

    return Math.min(

        Math.max(number,min),

        max

    );

}

/*========== Toast ==========*/

function showToast(message,color="#27ae60"){

    if(!toast) return;

    toast.innerText = message;

    toast.style.background = color;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}

function getNextResetTime(){

    const now = new Date();

    const next = new Date();

    next.setHours(24,0,0,0);

    const diff = next - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));

    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه`;

}