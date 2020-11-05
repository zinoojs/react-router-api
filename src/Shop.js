import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
// import uuid from 'react-uuid'

export default function Shop() {
    const shopStyle = {
        listStyle:'none'
    }
    const [items, setItems] = useState([]);
    useEffect(() => {
        shopItems();
    },[])

    const shopItems = async () => {
        const data = await fetch("https://fakestoreapi.com/products/");
        // const data = await fetch("https://fortnite-api.theapinetwork.com/store/get");
        const items = await data.json()
        // console.log(items);
        setItems(items)
    }
    return (
        <div>
            <h1>Shop is here</h1>
            {
                items.map((item) => (
                    <h4 key={item.id} style={shopStyle}>
                        <Link to={`/shop/${item.id}`} >
                            {item.title}
                        </Link>
                    </h4>
                ))
            }
        </div>
    );
}
