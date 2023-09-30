/**
 * This file is responsible for connecting to the Firebase database to the 
 * Express API endpoints.
 */


/**
 * This function is responsible for getting the data from the Firebase database
 * and sending it to the client.
 */
async function hpt() {
    // Initialize the firestore DB.
    const { collection, getDocs, getFirestore, limit, orderBy, query } = require('firebase/firestore');
    const hptConfig = require('./hpt-config.json');
    const { initializeApp } = require('firebase/app');
    hptConfig.apiKey = process.env.FB_API_KEY;
    hptConfig.appId = process.env.FB_APP_ID;
    const app = initializeApp(hptConfig);
    const db = getFirestore(app);
    let response = [];
    
    // Get data from Firestore database & send it to the client.
    try {
        const hptRef = collection(db, 'HPT_Readings');
        const q = query(hptRef, orderBy('dateTimeCreated', 'desc'), limit(12));
        const hptSnapshot = await getDocs(q);
        hptSnapshot.forEach(doc => {
            response.push(doc.data());
        });
    } catch (e) {
        console.log(e);
    }

    return response;
}

module.exports = {
    hpt: hpt
};