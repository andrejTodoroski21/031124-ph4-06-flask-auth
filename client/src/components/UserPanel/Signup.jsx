import { useState } from 'react'

function Signup({setCurrentUser}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // EVENTS //

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/api/users', {
      method:'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json', 'Accept': 'application/json'}
    })
    .then(reponse => {
      if (reponse.ok){
        reponse.json()
        .then(newUser => setCurrentUser(newUser))
      }else{
        alert("Signup unsuccessful")
      }
    })
  }

  // RENDER //

  return (
    <form className='user-form' onSubmit={handleSubmit}>

      <h2>Signup</h2>

      <input type="text"
      onChange={e => setUsername(e.target.value)}
      value={username}
      placeholder='username'
      />

      <input type="password"
      onChange={e => setPassword(e.target.value)}
      value={password}
      placeholder='password'
      />

      <input type="submit"

      value='Signup'
      />

    </form>
  )

}

export default Signup
