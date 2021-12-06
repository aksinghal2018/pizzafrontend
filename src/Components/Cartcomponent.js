import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { encryptStorage } from '../config/Encrypt'
import { Container,Table,Row,Col } from 'react-bootstrap'

function Cartcomponent() {
    const [cart, setcart] = useState([])
    const [state, setstate] = useState(0)
    var totalbalance=0
    var changedata=0
    cart.map((item)=>{
            totalbalance=totalbalance+item.price*item.quantity
        
    })
    useEffect(() => {
        setcart(encryptStorage.getItem('cart'))
        
    }, [state])
    
    const deleteitem=(value)=>{
        var data=encryptStorage.getItem('cart')
        data.splice(value,1)
        encryptStorage.setItem('cart',data)
    }
    
    const Orderconfirm=()=>{
        const data=encryptStorage.getItem('cart')
        const user=encryptStorage.getItem('user')
        console.log(user[0]._id)
        const datasend={id:user[0]._id,date:Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}),order:data}
        if(data==undefined || data.length == 0){
            alert("No item in cart")
        }
        else{
            axios.post('http://localhost:8899/ordersend',datasend).then(
                (data)=>{
                    if(data.data.err==""){
                        alert(data.data.msg)
                        encryptStorage.setItem("cart",JSON.stringify([]))
                        window.location.reload("/menu")
                    }
                    else{
                        alert(data.data.err)
                    }
                }
            )
        }

    }
    const incquantity=(index)=>{
        var data=encryptStorage.getItem("cart")
        data[index].quantity=data[index].quantity+1
        encryptStorage.setItem("cart",data)
        setstate(Math.random())
    }
    const decquantity=(index)=>{
        var data=encryptStorage.getItem("cart")
        if(data[index].quantity>1){
        data[index].quantity=data[index].quantity-1
        encryptStorage.setItem("cart",data)}
        else{
            var data=encryptStorage.getItem('cart')
            data.splice(index,1)
            encryptStorage.setItem('cart',data)
        }
        setstate(Math.random())

}
    return (
        <Container>
            <h1>Cart</h1>
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quanitity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            {
                cart.map((item,index)=>{
                    return(<tr><td>{index+1}</td><td>{item.name}</td><td>{item.price}</td><td><center><button type="button" id={index} className="btn btn-primary " style={{marginRight:"20px"}} onClick={()=>{incquantity(index)}}>+</button>{item.quantity}<button type="button" id={index} className="btn btn-primary" style={{marginLeft:"20px"}} onClick={()=>{decquantity(index)}}>-</button></center></td><td>{item.price * item.quantity}</td><td><button type="button" className="btn btn-danger" id={item.id} onClick={()=>{deleteitem(index)}}>Delete</button></td></tr>)
                })
            }
            </tbody>
          </Table>
          <Row>
              <Col>
            <p>Total: {totalbalance} RS</p></Col><Col><button type="button" className="btn btn-primary" onClick={Orderconfirm} >Order</button></Col></Row>
        </Container>
    )
}

export default Cartcomponent
