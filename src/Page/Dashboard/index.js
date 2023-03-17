import React, {useState} from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import {employeesData} from '../../data.js/index';

const Dashboard = () => {
    const[employees, setEmployees] = useState(employeesData);
    const[selectedEmployee, setSelectedEmployee] = useState(null)
    const[isAdding, setIsAdding] = useState(false);
    const[isEditing, setIsEditing] = useState(false);


  return (
    <div className='container'>
    {!isAdding && !isEditing &&(
      <>
      <Header
        setIsAdding = {setIsAdding}
        />
        <list
          employees={employees}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </>
    )}
      
    </div>
  )
}

export default Dashboard
//21:45
