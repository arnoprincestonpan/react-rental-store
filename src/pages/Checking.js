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
    const [staffPassword, setStaffPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogIn = (quickLoginCode) => {
        console.log(staffPassword)
    }

    return (
    <div className='container'>
        <h1>Checking</h1>
        <div className="mb-1">
            <form className="d-flex flex-row">
                <div className="form-group">
                    <div>
                        <label htmlFor="staffQuickLogIn"><p className="text-uppercase">Staff Logged In: <b>{staffLogged}</b></p></label>
                    </div>
                    <div className="d-flex flex-row mx-auto">
                        <input type="password" className="form-control" id="staffQuickLogin" onChange={(e) => setStaffPassword(e.targetValue)} placeholder="Enter Quick Login Code"/>
                        <button type="submit" className="btn btn-primary border mx-1" onClick={()=>handleLogIn(staffPassword)}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Checking