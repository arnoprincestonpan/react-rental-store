import React, { useState } from 'react'
import catalogData from "../data/catalog.json"
import customerData from "../data/customer.json"
import staffData from "../data/staff.json"

function Checking() {
    const defaultLogIn = "Guest Staff"
    const [staffInfo, setStaffInfo] = useState(staffData)
    const [shortPassword, setShortPassword] = useState("")
    const [staffLoggedIn, setStaffLoggedIn] = useState(defaultLogIn)
    const [showStaffLoggedIn, setShowStaffLoggedIn] = useState(false)

    const handlePasswordSubmit = () => {
        console.log(shortPassword)
        console.log(staffLoggedIn)
        const staffInfoIndex = staffInfo.findIndex(staff => staff.quickLogin === shortPassword)
        console.log(staffInfoIndex)
        if(staffInfo !== -1){
            setStaffLoggedIn(`${staffInfo[staffInfoIndex].firstName} ${staffInfo[staffInfoIndex].lastName}`)
            setShowStaffLoggedIn(!showStaffLoggedIn)
        } 
    }

    const handleLogOut = () => {
        setShowStaffLoggedIn(!showStaffLoggedIn)
        setStaffLoggedIn(defaultLogIn)
    }

    return (
    <div className='container'>
        <h1>Staff</h1>
        <div>
            <label htmlFor='shortPassword'>Current LogIn: {staffLoggedIn}</label>
            { 
                // will show Password Area if Not Logged In.
                showStaffLoggedIn ?
                    <div>
                        <button className="btn btn-danger border m-1" onClick={() => handleLogOut()}>Log Out</button>
                    </div>
                :
                    <div>
                        <input className="border m-1" type="password" id="shortPassword" name="shortPassword" onChange={(e) => setShortPassword(e.target.value)} value={shortPassword}/>
                        <button className="btn btn-primary border m-1" onClick={() => handlePasswordSubmit()}>Quick Login</button>
                    </div>
            } 
        </div>
    </div>
    )
}

export default Checking