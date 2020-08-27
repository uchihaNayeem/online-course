import React from 'react';



import './Course.css'

const Course = (props) => {

  

  const { name, id, img, price } = props.name;

  const handleButton = props.handleButton;

  // console.log(props.handleButton);


  return (

    <div className="container">
      <div className="course-img">
        <img src={img} alt="" />
        <h3>Name: {name} </h3>
        <p>ID: {id}</p>
        <p>Price: $ {price}</p>
        <button onClick={() => handleButton(props.name)}>Add Course</button>
      </div>
      

    </div>
  );
};

export default Course;