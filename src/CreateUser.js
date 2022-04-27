import { useFormik } from 'formik';
import React from 'react';

function CreateUser () {
    let formik = useFormik( {
        initialValues : {
            name : "",
            position : "",
            office : "",
            age : 0,
            startDate : "",
            salary : 0

        },
        validate : (values) => {
            const errors = {};

            if(!values.name) {
                errors.name = "Name can not be blank"
            }
            //errors.name = "Please enter your name";
            if(!values.age || values.age < 18) {
                errors.age = "Age is required and should be greater than 18"
            }


            return errors;

        },
        onSubmit : (values) => {
            console.log(values);
        },
    });
    return (
        <div className='container'>
        <form onSubmit={formik.handleSubmit}>
         <div className='row'>
                <div className='col-lg-6'>
                    <label>Name</label>
                    <input 
                     type={'text'} 
                     name="name" 
                     onChange={formik.handleChange} 
                     value={formik.values.name} 
                     className="form-control" 
                     style={{border : formik.errors.name ? '1px solid red' : '', border : formik.values.name !== "" ? '1px solid green' : ''}}
                    />
                    <span style={{color : 'red'}}>{formik.errors.name}</span>
                </div>
                <div className='col-lg-6'>
                    <label>Position</label>
                    <input 
                     type={'text'} 
                     name="position" 
                     onChange={formik.handleChange} 
                     value={formik.values.position} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Office</label>
                    <input 
                     type={'text'} 
                     name="office" 
                     onChange={formik.handleChange} 
                     value={formik.values.office} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Age</label>
                    <input 
                     type={'number'} 
                     name="age" 
                     onChange={formik.handleChange} 
                     value={formik.values.age} 
                     className="form-control" 
                    />
                    <span>{formik.errors.age}</span>
                </div>
                <div className='col-lg-6'>
                    <label>Start Date</label>
                    <input 
                     type={'date'} 
                     name="startDate" 
                     onChange={formik.handleChange} 
                     value={formik.values.startDate} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Salary</label>
                    <input type={'number'} 
                    name="salary" 
                    onChange={formik.handleChange} 
                    value={formik.values.salary} 
                    className="form-control" 
                   />
                </div>
                <div className='col-lg-6 mt-3'>
                    <input disabled={Object.keys(formik.errors).length !== 0} type={'submit'} className="btn btn-primary" />
                </div>
            </div>                 
        </form>
        <pre>
        {JSON.stringify(formik.errors)}
        </pre>
        </div>
    )
}

export default CreateUser;