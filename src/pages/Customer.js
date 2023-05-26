import React, { useState } from "react";
import customerData from "../data/customer.json";

function Customer() {
  const [customerInfo, setCustomerInfo] = useState(customerData);
  const [searchingFor, setSearchingFor] = useState("");
  const [customerProperty, setCustomerProperty] = useState("");
  const [showCheckedItems, setShowCheckedItems] = useState(Array(customerInfo.length).fill(false));

  const handleSearchCustomer = (customer) => {
    console.log("handle search");
    setSearchingFor(customer)
    console.log(searchingFor);
  };

  const handleCustomerSelect = (customer) => {
    console.log("handle select");
    setCustomerProperty(customer)
    console.log(customerProperty)
  };

  const handleToggleCheckedItems = (index) => {
    setShowCheckedItems((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const allCustomers = customerInfo.map((customer, index) => (
    <tbody key={customer.customerNumber}>
      <tr>
        <td>
          <button className="btn btn-primary border" onClick={() => handleCustomerSelect(customer)}>Select</button>
        </td>
        <td>{customer.customerNumber}</td>
        <td>
          {customer.customerFirstName} {customer.customerLastName}
        </td>
        <td>
          {customer.customerAddress.streetNumber}-
          {customer.customerAddress.streetName}
          <br />
          {customer.customerAddress.postalCode}
        </td>
        <td>
          {customer.customerContact.phone}
          <br />
          {customer.customerContact.email}
        </td>
        <td>
          <button
            className={showCheckedItems[index] ? "btn btn-secondary border" : "btn btn-primary border"}
            onClick={() => handleToggleCheckedItems(index)}
          >
            {showCheckedItems[index] ? "Close" : "View"}
          </button>
          {showCheckedItems[index] &&
            customer.items.map((items) => (
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
            ))
          }
        </td>
      </tr>
    </tbody>
  ));

  return (
    <div className="container">
      <h1>Customer Information</h1>
      <div>
        <button>Existing Customer</button>
        <button>New Customer</button>
      </div>
      <div>
        <div>
          <label htmlFor="customer-search">Customer Selected: </label>
        </div>
        <div>
          <input
            className="border m-1 form-control"
            type="text"
            name="customer-search"
            id="customer-search"
            onChange={(e) => setSearchingFor(e.target.value)}
          />
          <button
            className="btn btn-primary border m-1"
            onClick={() => handleSearchCustomer()}
          >
            Search
          </button>
          <button
            className="btn btn-secondary border m-1"
            onClick={() => handleCustomerSelect()}
          >
            Select
          </button>
        </div>
        <div>
          <h2>Customers Matching</h2>
          <table className="table border table-striped m-1">
            <thead>
              <tr>
                {/* Empty row for Select Button */}
                <th></th>
                <th>Customer #</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Checked Items</th>
              </tr>
            </thead>
            {allCustomers}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customer;
