import React, { useState, useEffect } from 'react'
import { Card,Button } from 'react-bootstrap';
// import {Link} from 'react-router-dom'
// import uuid from 'react-uuid'

export default function ItemDetails({match}) {
    const shopStyle = {
        listStyle:'none'
    }
    const [item, setItem] = useState({
        // image:{}
    });
    useEffect(() => {
        singleItem();
        // console.log(match);
    },[])

    const singleItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        // const data = await fetch("https://fortnite-api.theapinetwork.com/store/get");
        const item = await data.json()
        console.log(item);
        setItem(item)
    }
    return (
        <div>
      
            <Card style={{ width: '28rem', textAlign:'center', margin:"10px auto", padding:"15px" }}>
            <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                    </Card.Text>
                <Card.Text>
                  {item.category}
                </Card.Text>
                <Button variant="primary"> ${item.price}</Button>
              </Card.Body>
            </Card>
        </div>
    );
}
