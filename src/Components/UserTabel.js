import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
const UserTabel = () => {
    const [users, setUsers] = useState([]);
    const location = useLocation

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://65.0.93.119:4000/fetchusers');
            console.log(response)
            const { data, success, message} = await response.json();
            console.log('data----', data)
            if (success) {
                setUsers(data || []);
            } else {
                console.error('error', message)
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        
        fetchUsers();
    }, []);


    const deleteData = (id) => {
      let filteredData = users.filter((_,val)=> val !== id);
        
      setUsers(filteredData)
    }
    
    const updateData =(params) => {
      
    }
    
    return (
        <>
            <div className='container mt-5'>
                <h1>User List</h1>

                {
                    users.map((v,i)=>{
                        return (
                            <>
                                <h3 key={i}>{v.firstname} {v.lastname} {v.age} <button onClick={()=>deleteData(i)}>Delete</button> <button onClick={updateData}>Update</button> </h3>
                                
                                {/* <button>Update</button> */}
                            </>
                        )
                    })  
                }

               </div>
        </>
    )
}

export default UserTabel