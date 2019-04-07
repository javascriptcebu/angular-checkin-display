const functions = require('firebase-functions');
const axios = require('axios');
const token = functions.config().keys.token;
const admin = require('firebase-admin');

admin.initializeApp();

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.checkIn = functions.https.onRequest((request, response) => {
    const url = request.body.api_url;

    axios.get(url, {
        params: {
            token
        }
    }).then((res) => {
        firestore.collection('attendees').add(res.data);

        response.send('Successfully received');
    });
});