import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Course from './components/Course/Course';

import { useState } from 'react';
import { useEffect } from 'react';
import courses from './fakeData/courses';
import Cart from './components/Cart/Cart';


function App() {

  
  const [course, setCourse] = useState(courses)

  const [cart, setCart] = useState([])


  const handleButton = (course) => {
    // console.log('course added', course)
    const newCart = [...cart, course];
    setCart(newCart);
  }
  

  

  return (
    <div className="App">

      <Header></Header>

  
  <Cart cart={cart}></Cart>

      
        {
          course.map(courses => <Course handleButton={handleButton} key={courses.id} name={courses}></Course> )
        }
      


    </div>
  );
}

export default App;
