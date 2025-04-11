
import React from 'react';
import './App.css'
import Blogs from './components/Blogs/blogs'
import Navbar from './components/Navbar/navbar'

function App() {
 const [bookmarked,setBookmarked] = React.useState([]);
 const [readingCount,setReadingCount] = React.useState(0);
  const handleBookMark =(blog) => {
    setBookmarked([...bookmarked, blog]);
  }

  const handleMarkAsRead =(time,id) => {
    setReadingCount(readingCount + time);
    handleRemoveBookMark(id);
  }
  
  const handleRemoveBookMark =(id) => {
    const remainingBookMark = bookmarked.filter(blog => blog.id !== id);
    setBookmarked(remainingBookMark);
  }
  return (
    <>
        <Navbar />
       

        <div className='main-container flex text-center'>
        
  
          <div className='left-container w-[70%]'>  
           
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
          </div>
          <div className='right-container w-[30%]'>
            <h1>Reading time:{readingCount}</h1>
            <h1>BookMark count:{bookmarked.length}</h1>

            {
              bookmarked.map((marked) => <p className='bg-red-400 p-2 m-2 text-white shadow'>{marked.title}</p>)
            }
          </div>
        </div>
    </>
  )
}

export default App
