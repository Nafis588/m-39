
import './App.css'

function App() {
  function handleCLick() {
    alert('Hello Niloy')
  }
  const handleClick3 =()=>{
    alert('Hello Niloy3')
  }
  return (
    <>
      <h1>Niloy coding</h1>
      <button onClick={handleCLick}>Click</button>

      <button onClick={function handleCLick2(){
        alert('Hello Niloy2')
      }}>Click2</button>
      
      <button onClick={handleClick3}>Click Me3</button>
    </>
  )
}

export default App
