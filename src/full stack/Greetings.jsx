import React from 'react'

function Greetings() {
  const hour=new Date().getHours();
  const Greetings = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  return (
    <div>
      <h3>HI {Greetings}</h3>
      
    </div>
  )
}
export default Greetings;
