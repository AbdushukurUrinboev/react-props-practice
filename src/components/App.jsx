import React from "react";
import Card from "./card"
import Contacts from "./contacts"
import Avatar from "./avatar";

function createCard(contact){
  return (
    <Card
    id={contact.id}
      key={contact.id}      
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
     <Avatar 
       img="https://i.mycdn.me/image?id=834608379778&plc=WEB&tkn=*Wl53HxFW-5mDrphTGD0V7SUc6_Q&fn=sqr_288"
     />
     {Contacts.map(createCard)}


     
    </div>
  );
}

export default App;
