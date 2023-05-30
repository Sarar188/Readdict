import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {getDatabase , ref , onValue} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
const appSettings = {
    databaseURL : "https://readdict-24105-default-rtdb.firebaseio.com/"
}
const firebaseConfig = {
    apiKey: "AIzaSyAgsH_evjaq1WqrJhwcXysigTqrpUbTouA",
    authDomain: "readdict-24105.firebaseapp.com",
    databaseURL: "https://readdict-24105-default-rtdb.firebaseio.com",
    projectId: "readdict-24105",
    storageBucket: "readdict-24105.appspot.com",
    messagingSenderId: "611748519700",
    appId: "1:611748519700:web:762ed6c2d9d97c5f092c01"
  };

const App = initializeApp(appSettings);
const Database = getDatabase(App);
const Cover = localStorage.getItem("cover");

console.log("we're here")
       if(Cover){
        const CoverPhoto = document.createElement('img');
        CoverPhoto.src= Cover;
        CoverPhoto.alt = 'Cover'
        console.log("cover photo is " , CoverPhoto.src)
        CoverPhoto.className = "library-thumbnail"; 
       const CoverPhotoClass = document.createElement('div');
       
       CoverPhotoClass.className = "thumbnail";
       const CoverPhotoFullClass = document.querySelector('.library-content')
       CoverPhotoClass.appendChild(CoverPhoto);
       CoverPhotoFullClass.appendChild(CoverPhotoClass);
       console.log("done");
       }
       localStorage.clear();
       

        