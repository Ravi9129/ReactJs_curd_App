import React, { useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';



const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const history = useNavigate();
    // const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("love you")
        axios.post("https://64f30fd5edfa0459f6c64019.mockapi.io/crud-youtube",
            {
                name: name,
                email: email,

            })
            .then(() => {
                history("/read")
            });

    };

    return <>
        <div className=''>
            <div className='d-flex justify-content-between m-2'>
                <h4>Create </h4>
                <Link to="/read">
                <button className='btn btn-primary'>View Data</button>
                </Link>
            </div>
            <form>
                <div className="col-sm-4 mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className=" col-sm-4 mb-sm-0 mb-3 ">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    </>

}

export default Create