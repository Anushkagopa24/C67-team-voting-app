import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCB1BZMdGT7Gp8xfMgtNTJWE9WQRbOJhSs",
        authDomain: "team-voting-app-f081c.firebaseapp.com",
        projectId: "team-voting-app-f081c",
        storageBucket: "team-voting-app-f081c.appspot.com",
        messagingSenderId: "737029662588",
        appId: "1:737029662588:web:df85f477d850562f8566f9"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();