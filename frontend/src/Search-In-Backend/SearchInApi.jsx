import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

export default function SearchInApi() {
    const [query, setQuery] = useState('');
    const [data, setData]= useState([]);


    useEffect(()=>{
        const fetchUsers= async ()=>{
        const res= await axios.get(`https://tablesearchbarbackend.vercel.app/?q=${query}`)
        setData(res.data);
        }     
        // fetchUsers();   
        if(query.length === 0|| query.length > 2 ){fetchUsers()};   
    },[query])

    return (
        <div>
            <input className="form-control m-4 w-25" type="text" placeholder='Search...'
                onChange={(e) => setQuery(e.target.value)} />
            <Table data={data} />
        </div>
    )
}
               

