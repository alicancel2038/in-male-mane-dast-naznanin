/*=========================================
            Money Manager
             storage.js
==========================================*/

/*========== Save Data ==========*/

function saveData(){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(app)

    );

}

/*========== Load Data ==========*/

function loadData(){

    const data = localStorage.getItem(STORAGE_KEY);

    if(!data){

        return false;

    }

    try{

        const parsed = JSON.parse(data);

        app = {

            ...app,

            ...parsed

        };

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}

/*========== Clear Data ==========*/

function clearData(){

    localStorage.removeItem(STORAGE_KEY);

}

/*========== First Run ==========*/

function initializeStorage(){

    const loaded = loadData();

    if(!loaded){

        app.createdAt = getToday();

        app.lastOpen = getToday();

        saveData();

    }

}