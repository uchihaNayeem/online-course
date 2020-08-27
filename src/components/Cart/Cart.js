import React from 'react';

const Cart = (props) => {
  // console.log(props);
  const cart = props.cart;
  // let coursePrice = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const course = cart[i];
  //   coursePrice = coursePrice + course.price
  // }

  const coursePrice = cart.reduce((sum, course) => sum + course.price,0)
  
  return (
    <div>
      <h2>Course Added:{cart.length}</h2>
  <p>Total Course Price: $ {coursePrice}</p>
  <img src={cart.img} alt=""/>
    </div>
  );
};

export default Cart;