import React, { useState, useEffect } from 'react'
import customerJson from "../data/customer.json"

function Customer() {
  const [customerData, setCustomerData] = useState(customerJson)
  const [selectedCustomer, setSelectedCustomer] = useState("")
  const [selectedCustomerCategory, setSelectedCustomerCategory] = useState("customerContact.phone")
  const [showCustomerInformation, setShowCustomerInformation] = useState(Array(customerData.length).fill(false))

  const customersItems = customerData.map((items) => 
    <tr key={items.customerNumber}>
      <td>{items.customerNumber}</td>
      <td>{items.customerFirstName} {items.customerLastName}</td>
      <td>{items.customerAddress.streetNumber} {items.customerAddress.streetName} <br/> {items.customerAddress.city}, {items.customerAddress.province} {items.customerAddress.postalCode}</td>
      <td>{items.customerContact.phone}</td>
      <td>{items.customerContact.email}</td>
      <td>
      <button className={showCustomerInformation[customerData.indexOf(items)] ? "btn btn-secondary" : "btn btn-info"} onClick={() => setShowCustomerInformation(prevState => prevState.map((value, index) => index === customerData.indexOf(items) ? !value : value))}>{showCustomerInformation[customerData.indexOf(items)] ? "Close" : "View"}</button>
        {
          showCustomerInformation[customerData.indexOf(items)] && 
          <table className="table table-striped border">
            <thead>
              <tr>
                <th>Item Id</th>
                <th>Check Out Date</th>
                <th>Time Limit</th>
                <th>Staff Used</th>
              </tr>
            </thead>
            <tbody>
              { 
                items.items.map((checked) => (
                  <tr>
                    <td>{checked.itemId}</td>
                    <td>{checked.checkoutDate}</td>
                    <td>{checked.timeLimit}</td>
                    <td>{checked.staffUsed}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </td>
    </tr>
  )

  return (
    <div className="container">
      <h1>Customer</h1>
      <label className="form-check-label" htmlFor="customer-search">Search:</label>
      <input className="form-control" type="text" name="customer-search" id="customer-search" />
      <label className="form-check-label" htmlFor="customer-search-category">Search by Category</label>
      <select className="form-select" name="customer-search-category" id="customer-search-category">
        <option value="customerContact.phone" selected>Phone Number</option>
        <option value="customerContact.email">Email</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="customerNumber">Customer Number</option>
      </select>
      <br/>
      <table className="table table-striped border">
        <thead>
          <tr>
            <th>Customer Number</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          { customersItems }
        </tbody>
      </table>
    </div>
  )
}

export default Customer