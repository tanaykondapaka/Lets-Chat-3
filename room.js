var firebaseConfig = {
    apiKey: "AIzaSyAoOmXA-DD7V5FLJPdQ6KrZY72_7w6sSRA",
    authDomain: "lets-chat-a65ae.firebaseapp.com",
    databaseURL: "https://lets-chat-a65ae-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a65ae",
    storageBucket: "lets-chat-a65ae.appspot.com",
    messagingSenderId: "431234539295",
    appId: "1:431234539295:web:da02278dd740be8c881a2a",
    measurementId: "G-L4NX6NRHEB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  inputvalue=""

user_name=localStorage.getItem("username")

addEventListener("load",function enter(){document.getElementById("hi").innerHTML="Welcome "+user_name
})

function addroom(){
  console.log("funcadd")
   roomname=document.getElementById("inp").value
   localStorage.setItem("roomname",roomname); console.log("lcadded")
   firebase.database().ref("/").child(roomname).update
  (
    {

    purpose:"data"
    
    }
    );console.log("added")
    window.location="chat.html"
  }

        function getData() {
          firebase.database().ref("/").on('value',
        function(snapshot) {document.getElementById("output").innerHTML =
        "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;})})
        row="<div id='"+roomname+"' onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
getData();


}
function redirectToRoomName(name){
  
    
    localStorage.setItem("roomname",name)
    window.location="kwitter_page.html"
}