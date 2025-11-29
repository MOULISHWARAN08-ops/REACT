import React from 'react'
import cars from './Cars.js'
function Car() {
  return (
    <div>
      <h2>Car Info</h2>
        <table border={1}> 
          <thead>
            <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Image</td>    
            </tr>
          </thead>
          <tbody>
            {
            cars.map((car,index)=>(
              <tr key={index}>
                <td>{car.name}</td>
                <td>{car.color}</td>
                <td><img src={car.url} alt={car.name} width="100px" height="60px"/></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Car
 

 
