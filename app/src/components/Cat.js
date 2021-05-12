import React from 'react';
import axios from 'axios';

const Cat = () => {
    axios.get('https://randomuser.me/api/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
    return (
        <div className="container">
            <h2>Yo here is a cat:</h2>
        </div>
    )
}

export default Cat;