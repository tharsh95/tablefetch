import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./fetch.css"

const Fetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setData(response.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            {data.map((el) => {
                return (
                    <table key={el.id}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Company Name</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.address.city}</td>
                                <td>{el.phone}</td>
                                <td>{el.website}</td>
                                <td>{el.company.name}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}

export default Fetch
