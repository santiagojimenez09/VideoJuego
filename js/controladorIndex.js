import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let avatar=document.getElementById("avatar")
let btnSalir=document.getElementById("btnsalir")
let ingresar=document.getElementById("ingresar")
let registro=document.getElementById("navmodalregistrar")



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    avatar.textContent=user.email
    ingresar.classList.add("invisible")
    registro.classList.add("invisible")

    btnSalir.removeEventListener("click", function(){

        signOut(auth).then(() => {
            // Sign-out successful.
            avatar.classList.add("invisible")
            ingresar.classList.remove("invisible")
            registro.classList.remove("invisible")

            window.location.href="index.html"
          }).catch((error) => {
            // An error happened.
          });

    })
    // ...
  } else {
    // User is signed out
    // ...
  }
});
