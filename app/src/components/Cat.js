import React from 'react';
import axios from 'axios';

const Cat = () => {
    axios.get('https://randomuser.me/api/')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    return (
        <div className="container">
            <h2>Yo here is a person:</h2>
        </div>
    )
}

export default Cat;