

function signup() {
    var email = document.getElementById('txtemail').value
    var password = document.getElementById('txtpw').value
    // alert(`email:- ${email}`)


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });    
}


function login() {
    var email = document.getElementById('txtemaillgoin').value
    var password = document.getElementById('txtpwlogin').value
    // alert(`email:- ${email}`)



    //const auth = getAuth();
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
}

