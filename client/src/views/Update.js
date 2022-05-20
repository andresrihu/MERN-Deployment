import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Update = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    })
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const { _id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + _id)
            .then(res => {
                // console.log(res.data.results)
                setForm(res.data.results)
            })
            .catch(err => console.log(err))

    }, [_id])


    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/pets/update/${_id}`, form)
            .then(res => {
                // console.log(res)
                history.push(`/pets/${_id}`)
            })
            .catch(err => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            })
    }

    return (
        <div className="w-50 d-block mx-auto my-3">
            <h3 className="text-center mb-3">Know a pet needing a home?</h3>
            <Link to='/' className='btn btn-link'>back to home</Link>
            <hr />
            <form className="form-group" onSubmit={onSubmitHandler}>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Pet Name"
                        name="name"
                        value={form.name}
                        type="text"
                        onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Pet Type"
                        name="type"
                        value={form.type}
                        type="text"
                        onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.type && errors.type.message}</span>
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Pet Description"
                        name="description"
                        value={form.description}
                        type="text"
                        onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div>
                <h3>Skills(optional):</h3>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Skill 1"
                        name="skillOne"
                        value={form.skillOne}
                        type="text"
                        onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{errors.name && errors.name.message}</span> */}
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Skill 2"
                        name="skillTwo"
                        value={form.skillTwo}
                        type="text"
                        onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{errors.name && errors.name.message}</span> */}
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Skill 3"
                        name="skillThree"
                        value={form.skillThree}
                        type="text"
                        onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{errors.name && errors.name.message}</span> */}
                </div>

                <input className="btn btn-info" value="Upadate Pet" type="submit" />
            </form>
        </div>
    )
}
export default Update;