const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCvzgHwbIw9FjrWsxFbC-npdZ2KwUvneUk',
    authDomain: 'devcal-1e388.firebaseapp.com',
    projectId: 'devcal-1e388',
    storageBucket: 'devcal-1e388.appspot.com',
    messagingSenderId: '576477700454',
    appId: '1:576477700454:web:9b6ca20b84d81abd4ae8a7',
    measurementId: 'G-M1G6HYK7NX',
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            auth.currentUser.updateProfile({
                displayName: username,
            });
            auth.currentUser.sendEmailVerification().then(() => {
                console.log('Verification sent.');
            });
        })
        .catch((err) => {
            console.log('Register failed.');
        });
};

const login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            if (!auth.currentUser.emailVerified) {
                auth.currentUser.sendEmailVerification().then(() => {
                    console.log('Verification sent.');
                });
                console.log('Need verification');
                throw 'Need verification';
            }
            console.log('Login successful');
        })
        .catch((err) => {
            console.log('Login failed.');
        });
};
