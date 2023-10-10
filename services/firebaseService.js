/**
 * This file is responsible for connecting to the Firebase database to the 
 * Express API endpoints.
 */


/**
 * This function is responsible for getting the data from the Firebase database
 * and sending it to the client.
 */
async function hpt(count = process.env.FB_DEFAULT_RECORDS) {
    // Initialize the firestore DB.
    const { collection, getDocs, getFirestore, limit, orderBy, query } = require('firebase/firestore');
    const { initializeApp } = require('firebase/app');
    const hptConfig = {
        apiKey: process.env.FB_API_KEY,
        authDomain: process.env.FB_AUTH_DOMAIN,
        projectId: process.env.FB_PROJECT_ID,
        storageBucket: process.env.FB_STORAGE_BUCKET,
        messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
        databaseURL: process.env.FB_DATABASE_URL
    };

    const app = initializeApp(hptConfig);
    const db = getFirestore(app);
    let response = [];
    
    // Get data from Firestore database & send it to the client.
    try {
        const hptRef = collection(db, 'HPT_Readings');
        const q = query(hptRef, orderBy('dateTimeCreated', 'desc'), limit(count));
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