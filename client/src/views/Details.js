import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

const Details = (props) => {
    const [petInfo, setPetInfo] = useState([])
    const { _id } = useParams();
    const history = useHistory();
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + _id)
            .then(res => {
                // console.log(res.data.results)
                setPetInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id])

    const deletePet = e => {
        // console.log('delete it!!!')
        axios.delete('http://localhost:8000/api/pets/delete/' + _id)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    const onLikeHandler = (_id) => {
        // console.log(_id);
        setLikes(1)
    }

    return (
        <div>
            <div>
                <Link to='/' className='btn btn-link'>back to home</Link>
                <h3>Details about: {petInfo.name}</h3>
                <button className='btn btn-outline-danger' onClick={deletePet}>
                    🏠 Adopt {petInfo.name}
                </button>
            </div>
            <br />
            <p>Pet Type: {petInfo.type}</p>
            <p>Description: {petInfo.description}</p>
            <div>
                <h4 className='text-decoration-underline'>Skills:</h4>
                <p> {petInfo.skillOne} </p>
                <p> {petInfo.skillTwo} </p>
                <p> {petInfo.skillThree} </p>
            </div>
            <br />
            <div className='d-flex justify-content-center align-middle'>
                <button className='btn btn-success mx-3' disabled={likes > 0 ? true : false} onClick={(e) => { onLikeHandler(petInfo._id) }}> Like {petInfo.name}</button>
                <p>{likes} like(s)</p>
            </div>
        </div>
    )
}
export default Details;