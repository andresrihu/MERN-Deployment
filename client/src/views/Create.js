import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Create = (props) => {
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


    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // const onSkillChange = (e, i) => {
    //     // console.log(e.target.value);
    //     const copyForm = {
    //         ...form,
    //         [skills[i]]: e.targe.value
    //     };

    //     // console.log(copyForm)
    //     // copyForm.skills[i] = e.target.value;
    //     setForm(copyForm);
    // }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log('create it!')
        axios.post('http://localhost:8000/api/pets/new', form)
            .then(res => {
                console.log(res);
                history.push('/');

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
                        type="text"
                        onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Pet Type"
                        name="type"
                        type="text"
                        onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.type && errors.type.message}</span>
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Pet Description"
                        name="description"
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
                        type="text"
                        onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{errors.name && errors.name.message}</span> */}
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Skill 2"
                        name="skillTwo"
                        type="text"
                        onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{errors.name && errors.name.message}</span> */}
                </div>
                <div>
                    <input
                        className="form-control my-3"
                        placeholder="Skill 3"
                        name="skillThree"
                        type="text"
                        onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{errors.name && errors.name.message}</span> */}
                </div>

                <input className="btn btn-info" value="Add Pet" type="submit" />
            </form>
        </div>
    )
}
export default Create;