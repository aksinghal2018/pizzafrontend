import React from 'react'
import { useState, useEffect } from 'react'
import { encryptStorage } from '../config/Encrypt'
import {Card,Button} from 'react-bootstrap'
function Dashboard() {
    const [user, setuser] = useState("")
    async function fetchdata(){
        await setuser(encryptStorage.getItem('user'))
    }
    useEffect(() => {
        fetchdata()
        console.log(encryptStorage.getItem('user'))
    }, [])
    return (
        <></>
    )
}

export default Dashboard
