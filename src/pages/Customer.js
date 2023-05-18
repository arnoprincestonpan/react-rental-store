import React from 'react'

function Customer() {
  return (
    <div className="container">
      <h1>Customer Information</h1>
        <div>
          <button>Existing Customer</button>
          <button>New Customer</button>
        </div>
        <div>
          <div>
            <label htmlFor='customer-search'>Customer Selected: </label>
          </div>
          <div>
            <input className="border m-1" name="customer-search" id="customer-search"></input>
            <button className="btn btn-primary border m-1">Search</button>
          </div>
        </div>
    </div>
  )
}

export default Customer