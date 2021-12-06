import React from 'react'
import {
  Link
} from "react-router-dom";
import { encryptStorage } from '../config/Encrypt'
import { useState, useEffect } from 'react';
import Clockcomponent from './Clockcomponent';
import { Badge } from 'react-bootstrap';
function Navbar() {
  const [cart, setcart] = useState([])
  const [state, setstate] = useState("")
  useEffect(() => {

    if(encryptStorage.getItem('cart')==undefined){
      encryptStorage.setItem('cart',[])
    }
    setcart(encryptStorage.getItem('cart'))
    console.log(encryptStorage.getItem('user'))
  }, [])

  
  const dashboardcomponent = encryptStorage.getItem('user') != undefined ? <>

    <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to={`/dashboard`} style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Dashboard</Link>
    </li>
    <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to="/menu" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Menu</Link>
    </li>
    <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to="/addmenu" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Add Menu</Link>
    </li>
    <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to="/logout" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Logout</Link>
    </li>
    <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to="/cart" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Cart <Badge bg="secondary">{cart.length}</Badge></Link>
    </li>
    <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to="/historycart" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>History Cart </Link>
    </li>
    </> : <></>

  const logincomponent = encryptStorage.getItem('user') != undefined ? <></>:<><li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
  <Link to="/login" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Login</Link>
</li></>

  return (
    <nav style={{ borderBottom: "2px solid black", backgroundColor: "blue" }} >
      <ul style={{ paddingTop: "7px", display: "flex", paddingRight: "20px" }}>
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Home</Link>
        </li>
        {dashboardcomponent}
        {logincomponent}
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/register" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Register</Link>
        </li>
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/about" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>About</Link>
        </li>

        <div style={{ marginLeft: 'auto', color: "white" }}>
          <Clockcomponent />
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
