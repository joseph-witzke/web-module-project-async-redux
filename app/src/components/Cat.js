import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Cat = (props) => {
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
            <h2>{props.person.name.title} {props.person.name.first} {props.person.name.last}</h2>
            <img src={props.person.picture.large} alt="large profile" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        person: state.person,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Cat);