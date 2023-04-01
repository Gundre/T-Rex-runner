const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCKwwkYIcnqCgAcFkNQMcjCm96nrUfX6Us",
  authDomain: "auth-8cceb.firebaseapp.com",
  projectId: "auth-8cceb",
  storageBucket: "auth-8cceb.appspot.com",
  messagingSenderId: "463771775207",
  appId: "1:463771775207:web:b9e53598247728ae41b242",
  measurementId: "G-4LNB8JSQFW"
});
  
   const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)

            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            console.log(result)
           
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
    }