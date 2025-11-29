import React from 'react'
function calculate(r) {
    return 3.14*r*r;
}
export default function circle(){
     return (
    <div>
      circle area :{calculate(5)}
      <br />
      circle area :{calculate(10)}
    </div>
  )
}

  
