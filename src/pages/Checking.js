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
        const staffIndex = staff.findIndex(staff => staff.quickLogin === quickLoginCode)
        if(staffIndex !== -1){
            setStaffLogged(`${staff[staffIndex].firstName} ${staff[staffIndex].lastName}`)
            setLoggedIn(true)
        }
    }

    return (
    <div className='container'>
        <h1>Checking</h1>
        <div className="mb-1">
            <form className="d-flex flex-row">
                <div className="form-group">
                    <div>
                        <label for="staffQuickLogIn"><p className="text-uppercase">Staff Quick Login</p></label>
                    </div>
                    <div className="d-flex flex-row mx-auto">
                        <input type="password" className="form-control" id="staffQuickLogin" onChange={(e) => setStaffPassword(e.targetValue)} placeholder="Enter Quick Login Code"/>
                        <button type="submit" className="btn btn-primary border mx-1" onClick={handleLogIn(staffPassword)} disabled={!staffPassword}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Checking