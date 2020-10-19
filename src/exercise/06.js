// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  // const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    event.preventDefault()

    const {value} = inputRef.current
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const {value} = event.target

    setUsername(value.toLowerCase())
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input. 
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={inputRef} onChange={handleChange} value={username}/>
      </div>
      {/* {error && <div>{error}</div>} */}
      <button type="submit" disabled={!username}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
