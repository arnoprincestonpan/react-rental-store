import React, { useState } from 'react'
import catalogData from "../data/catalog.json"
import customerData from "../data/customer.json"
import staffData from "../data/staff.json"

function Checking() {
    const [staffInfo, setStaffInfo] = useState(staffData)
    const [shortPassword, setShortPassword] = useState("")
    const [staffLoggedIn, setStaffLoggedIn] = useState("Not Logged In")

    const handlePasswordSubmit = () => {
        console.log(shortPassword)
        console.log(staffLoggedIn)
        const staffInfoIndex = staffInfo.findIndex(staff => staff.quickLogin === shortPassword)
        console.log(staffInfoIndex)
        if(staffInfo !== -1){
            setStaffLoggedIn(`${staffInfo[staffInfoIndex].firstName} ${staffInfo[staffInfoIndex].lastName}`)
        }
    }

    return (
    <div className='container'>
        <p>Staff Logged In: <b>{staffLoggedIn}</b></p>
        <input className="border m-1" type="text" id="shortPassword" name="shortPassword" onChange={(e) => setShortPassword(e.target.value)}/>
        <button className="btn btn-primary border m-1" onClick={() => handlePasswordSubmit()}>Quick Login</button>
    </div>
    )
}

export default Checking