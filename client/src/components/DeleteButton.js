import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const DeleteButton = (props) => {
    const { _id, name, successCallback } = props;
    const history = useHistory();


    const deletePet = e => {
        console.log('delete it!');
        axios.delete('http://localhost:8000/api/pets/delete/' + _id)
            .then(res => {
                successCallback()
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <button className='btn btn-outline-danger' onClick={deletePet}>
            🏠 Adopt {name}
        </button>
    )
}
export default DeleteButton;