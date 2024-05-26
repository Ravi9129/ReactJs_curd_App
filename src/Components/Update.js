import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id..", id)
        axios.put(`https://64f30fd5edfa0459f6c64019.mockapi.io/crud-youtube/${id}`,
            {
                name: name,
                email: email,
            })
            .then(() => {
                navigate("/read");
            });
    }

    return (
        <>

            <div className='row'>
                <h4>Update </h4>
                <form>
                    <div className="col-sm-4 mb-3">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className=" col-sm-4 mb-sm-0 mb-3 ">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary m-2"
                        onClick={handleUpdate}>Update</button>

                    <Link to="/read">
                        <button className="btn btn-secondary mx-2"
                            >Back</button>
                    </Link>

                </form>
            </div>
        </>
    )
}

export default Update