import React from 'react';
import { useState } from 'react';
import Table from './Table';
import Users from './user';

export default function Search() {
    const [query, setQuery] = useState('');

//use one at a time from both function of search name
    // 1st method

    // const search = (data) => {
    //     return data.filter(
    //         (item) =>
    //         item.firstName.toLowerCase().includes(query) ||
    //         item.lastName.toLowerCase().includes(query) ||
    //         item.email.toLowerCase().includes(query) ||
    //         item.gender.toLowerCase().includes(query)
    //         );
    // }

    // 2nd method
    const search = (data) => {
        const keys=["firstName","lastName","email","gender"]
        return data.filter(
            (item) =>
            keys.some((value)=>item[value].toLowerCase().includes(query))
            );
    }


    
    return (
        <div>
            <input className="form-control m-4 w-25" type="text" placeholder='Search...'
                onChange={(e) => setQuery(e.target.value)} />
            <Table data={search(Users)} />
        </div>
    )
}


//Single Search User Code

// export default function Search() {
//     const [query, setQuery]=useState('');
//   return (
//     <div>
//         <input type="text" placeholder='Search...'
//         onChange={(e)=>setQuery(e.target.value)}/>
//         <ul>
//             {Users.filter((user)=>
//                 user.firstName.toLowerCase().includes(query))
//                 .map((user)=>{
//                 return(
//                 <li key={user.id}>{user.firstName}</li>
//                 )
//             })}
//         </ul>
//     </div>
//   )
// }











