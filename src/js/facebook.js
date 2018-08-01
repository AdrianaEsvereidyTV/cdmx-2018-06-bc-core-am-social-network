const btnFace = document.getElementById('facebook-button');
btnFace.addEventListener('click', event => {
  let provider = new firebase.auth.FacebookAuthProvider();
  validacion(provider);
  /* location.href = 'views/wall.html'; */
  location.assign('views/wall.html');
  /* event.preventDefault(); */
  console.log(location);
});
const validacion = (provider) => {
  firebase.auth().signInWithPopup(provider).then(result => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    let token = result.credential.accessToken;
    console.log(token);
    // The signed-in user info.
    let user = result.user;
    /* event.preventDefault(); */
    console.log(user);
    /* href = '../views/wall.html' */
    /* location.href('../views/wall.html'); */
  }).catch(error => {
    // Handle Errors here.
    let errorCode = error.code;
    console.log(errorCode);
    let errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(credential);
  });
};
