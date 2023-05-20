import React, { useState } from 'react'
import customerData from '../data/customer.json'

function Customer() {
  const [customerInfo, setCustomerInfo] = useState(customerData)

  const handleSearchCustomer = () => (
    console.log('handle search')
  )

  const handleCustomerSelect = () => (
    console.log('handle select')
  )


  const allCustomers = customerInfo.map((customer) => (
    <tbody>
      <td>{customer.customerNumber}</td>
      <td>{customer.customerFirstName} {customer.customerLastName}</td>
      <td>
        {customer.customerAddress.streetNumber}-{customer.customerAddress.streetName}
        <br/>
        {customer.customerAddress.postalCode}
      </td>
      <td>{customer.customerContact.phone}<br/>{customer.customerContact.email}</td>
      <td>{customer.items.map((items) => 
        <table className="table border table-striped">
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Check Out Date</th>
              <th>Time Limit</th>
              <th>Staff</th>  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{items.itemId}</td>
              <td>{items.checkoutDate}</td>
              <td>{items.timeLimit}</td>
              <td>{items.staffUsed}</td>
            </tr>
          </tbody>
        </table>
      )}</td>
    </tbody>
  ))

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
            <input className="border m-1 form-control" type="text" name="customer-search" id="customer-search"/>
            <button className="btn btn-primary border m-1">Search</button>
            <button className="btn btn-secondary border m-1">Select</button>
          </div>
          <div>
            <h2>Customers Matching</h2>
            <table className="table border table-striped m-1">
              <thead>
                <tr>
                  <th>Customer #</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Checked Items</th>
                </tr>
              </thead>
              { allCustomers }
            </table>
          </div>
        </div>
    </div>
  )
}

export default Customer