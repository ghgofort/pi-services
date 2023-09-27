/**
 * This file is responsible for connecting to the Firebase database to the 
 * Express API endpoints.
 */


/**
 * This function is responsible for getting the data from the Firebase database
 * and sending it to the client.
 */
async function hpt() {
    const hptConfig = require('./hpt-config.json');
    // Initialize the firestore DB.
    const firestore = require('firebase/firestore');
    const firebaseApp = require('firebase/app');
    const app = firebaseApp.initializeApp(hptConfig);
    const db = firestore.getFirestore(app);
    let response = [];
    
    // Get data from Firestore database & send it to the client.
    try {
        const hptRef = firestore.collection(db, 'hpt_readings');
        const hptSnapshot = await firestore.getDocs(hptRef);
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