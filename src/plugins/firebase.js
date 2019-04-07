import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyA5cpfmzLYXw8s1TOuCj6bJ2TBJRO9hsJw',
  projectId: 'devcon-summit-registration',
  databaseURL: 'https://devcon-summit-registration.firebaseio.com'
})

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

window.firestore = firestore