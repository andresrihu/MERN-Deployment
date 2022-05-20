import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/all')
            .then(res => {
                // console.log(res.data.results)
                setPets(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-75 d-block mx-auto my-3'>
            <div>

                <Link to='/pets/new' className='btn btn-link btn-lg'>Add a pet to the shelter</Link>
            </div>
            <h3>These pets are looking for a good home.</h3>
            <table className="table table-bordered">
                <thead className='table-info'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                {
                    pets.map((pet, i) => {
                        return <tbody key={i}>
                            <tr className='align-middle'>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link className='btn btn-link' to={`pets/${pet._id}`}>Details</Link> |
                                    <Link className='btn btn-link' to={`pets/update/${pet._id}`}>Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </div>
    )
}
export default Main;