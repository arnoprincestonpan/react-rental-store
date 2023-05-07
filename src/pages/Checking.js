import React, { useState } from 'react'
import catalogData from "../data/catalog.json"
import customerData from "../data/customer.json"
import staffData from "../data/staff.json"

function Checking() {
    const [showCustomer, setShowCustomer] = useState(false)
    const [catalog, setCatalog] = useState(catalogData)
    const [customers, setCustomers] = useState(customerData)
    const [staff, setStaff] = useState(staffData)
    const [staffLogged, setStaffLogged] = useState("Guest Staff")

    return (
    <div className='container'>
        <h1>Checking</h1>
        <form>
            <div class="form-group">
                <label for="staffQuickLogIn">Staff Quick Login</label>
                <input type="password" class="form-control" id="staffQuickLogin" placeholder="Enter Quick Login Code"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
    )
}

export default Checking