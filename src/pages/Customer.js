import React, { useState, useEffect } from 'react'
import customerJson from "../data/customer.json"

function Customer() {
  const [customerData, setCustomerData] = useState(customerJson)
  const [selectedCustomer, setSelectedCustomer] = useState("")
  const [selectedCustomerCategory, setSelectedCustomerCategory] = useState("firstName")
  const [showCustomerInformation, setShowCustomerInformation] = useState()

  return (
    <div className="container">
      <h1>Customer</h1>
      <label className="form-check-label" htmlFor="customer-search">Search:</label>
      <input className="form-control" type="text" name="customer-search" id="customer-search" />
      <label className="form-check-label" htmlFor="customer-search-category">Search by Category</label>
      <select className="form-select" name="customer-search-category" id="customer-search-category">
        <option value="firstName" selected>First Name</option>
        <option value="lastName">Last Name</option>
      </select>
    </div>
  )
}

export default Customer