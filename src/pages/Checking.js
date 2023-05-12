import React, { useState } from 'react'
import catalogData from "../data/catalog.json"
import customerData from "../data/customer.json"
import staffData from "../data/staff.json"

function Checking() {
    const defaultLogIn = "Guest Staff"
    const [staffInfo, setStaffInfo] = useState(staffData)
    const [shortPassword, setShortPassword] = useState("")
    const [staffLoggedIn, setStaffLoggedIn] = useState(defaultLogIn)

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
        <input className="border m-1" type="password" id="shortPassword" name="shortPassword" onChange={(e) => setShortPassword(e.target.value)} value={shortPassword}/>
        <button className="btn btn-primary border m-1" onClick={() => handlePasswordSubmit()}>Quick Login</button>
    </div>
    )
}

export default Checking