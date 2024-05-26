import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('')

  function getData() {
    axios.get('https://64f30fd5edfa0459f6c64019.mockapi.io/crud-youtube')
      .then((res) => {
        // console.log(res.data)
        console.log("love you baby you can't get any data");
        setData(res.data)
      });
  }

  function handleDelete(id) {
    axios.delete(`https://64f30fd5edfa0459f6c64019.mockapi.io/crud-youtube/${id}`
    ).then(() => {
      getData();
    })
  }

  const setToLocalaStorage = (id, name, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <div>
        <div className='d-flex justify-content-between m-4'>
          <h4>Read </h4>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={() => {
              if (tabledark === 'table-dark') setTableDark("")
              else setTableDark("table-dark")
            }}
            />
          </div>


          <Link to="/">
            <button className='btn btn-secondary'>create Data</button>
          </Link>
        </div>
        <table className={`table ${tabledark}`}>
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {
            data.map((eachData) => {
              return (
                <>
                  < tbody >
                    <tr>
                      <th scope="row">{eachData.id}</th>
                      <td>{eachData.name}</td>
                      <td>{eachData.email}</td>
                      <td>
                        <Link to="/update">
                          <button className='btn btn-success' onClick={() => setToLocalaStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </>
              )
            })

          }
        </table>

      </div >

    </>
  )
}

export default Read