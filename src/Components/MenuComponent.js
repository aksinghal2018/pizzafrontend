import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Button,Col,Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { encryptStorage } from '../config/Encrypt'

function MenuComponent() {
    const [menu, setmenu] = useState([])
    const [state, setstate] = useState(1)
    //const { id } = useParams()

    useEffect(() => {
        if(encryptStorage.getItem('cart')==undefined){
            encryptStorage.setItem('cart',JSON.stringify([]))
        }
        axios.get(`http://localhost:8899/getmenu`).then(
            data => {
                setmenu(data.data.data)
                console.log(data)
            }
        )
    }, [])

    const Additem=(id,name,price)=>{
        var data=encryptStorage.getItem('cart')
        console.log("cart")
        console.log(encryptStorage.getItem('cart'))
        var index=-1
        data.map(item=>{
            if(item.id==id){
                index=index+1
            }
        })
        if(index==-1){
        data.push({id:id,name:name,price:price,quantity:1})
        encryptStorage.setItem('cart',data)
        alert("item added")
        window.location.reload()
        }
        else{
            alert("already added")
        }
    }
    return (
        <div>
            <Container>
                <Row style={{padding:"20px"}}>
                    
                {menu.map((item, index) => {
                    return (
                        <Col xs={4} key={index}>
                        <Card style={{ width: '18rem',margin:"20px" }} >
                            <Card.Img variant="top" src={`http://localhost:8899/${item.image}`} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                                <Button variant="primary" style={{marginRight:"20px"}} onClick={()=>{Additem(item._id,item.name,item.price)}} id={item._id}>Add item {item.likes}</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
                </Row>
            </Container>
            <ul>
            </ul>
        </div>
    )
}

export default MenuComponent
