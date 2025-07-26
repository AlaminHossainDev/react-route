import './App.css'
import Counter from './counter'
import DataLoad from './DataLoad'
import Friends from './Friends'
import Team from './Team'
import Users from './User'

function App() {
  function handleClick(){
    alert('Button Clicked Done Boss')
  };

  const handleClick2 = () => {
    alert("wrong man")
  }

  const addToFive = (num) => {
    alert(num + 6)
  }

  return (
    <>
    <DataLoad></DataLoad>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
     {/* <div>
      <h1>React Core conceft</h1>
      <button onClick={handleClick}>Click Here Now</button>
      <button onClick={handleClick2}>Here Now</button>
      <button onClick={() => alert(('clicked 3rd btn'))} >btn 3</button>
      <button onClick={()=> addToFive(3) } >Button 4</button>
    
      </div> */}
    </>
  )
}

export default App
