import { useState } from 'react'

function Login({setCurrent}) {

  // SUBMIT EVENT
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  function handleSubmit(e) {
    e.prevenrDefault()
    fetch('/api/login', {
      method:'POST',
      headers: {'Content-Type': 'application', 'Accept': 'application/json'},
      body: JSON.stringify({username, password})
  }).then(res => {
    if (res.ok){
      res.json()
      .then(user => setCurrent(user))
    }
  })
  }

  // RENDER //

  return (
    <form className='user-form' onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input type="text"
      onChange={e => setUsername(e.target.value)}
      value={username}
      placeholder='username'
      />

      <input type="text"
      onChange={e => setPassword(e.target.value)}
      value={password}
      placeholder='password'
      />

      <input type="submit"
      value='Login'
      />

    </form>
  )

}

export default Login
