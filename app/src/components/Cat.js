import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSuccess, GET_SUCCESS } from '../actions/personActions'

const Cat = (props) => {
    const { person, isFetching, error, dispatch } = props;
    
    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then(res => {
            dispatch({type: GET_SUCCESS, payload:res.data.results[0]});
        })
        .catch(err => {
            console.log(err)
        });
    }, []);
    

    const handleClick = () => {
        dispatch(getSuccess());
    }

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }
        
    if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
    }

    return (
        <div className="container">
            <h2>Yo here is a person:</h2>
            <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
            <img src={person.picture.large} alt="large profile" />
            <h3>{person.email}</h3>
            <button onClick={handleClick}>Get Profile!</button>
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