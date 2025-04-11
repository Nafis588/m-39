
import './App.css'
import Blogs from './components/Blogs/blogs'
import Navbar from './components/Navbar/navbar'

function App() {
 
  return (
    <>
        <Navbar />
       

        <div className='main-container flex text-center'>
        
  
          <div className='left-container w-[70%]'>  
           
          <Blogs />
          </div>
          <div className='right-container w-[30%]'>
            <h1>Reading time:0</h1>
            <h1>BookMark count:0</h1>
          </div>
        </div>
    </>
  )
}

export default App
