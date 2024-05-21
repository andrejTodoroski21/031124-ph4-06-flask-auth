import { useState } from 'react'
import UserPanel from "./UserPanel"
import Notes from "./Notes"

function App() {

  // STATE //

  const [currentUser, setCurrentUser] = useState(null)


  // SIGNUP, LOGIN AND LOGOUT FNS //
  // more will go here soon...


  // RENDER //

  return (
    <div className="App">

      <h1>Authentication + Authorization</h1>

      <UserPanel currentUser={currentUser} setCurrentUser={setCurrentUser}/>

      <Notes />

    </div>
  );
}

export default App;
