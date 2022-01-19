import React, {useState} from 'react';
import './add-item.css';


const AddItem = ({onAdded}) =>{
   
const [label, setLabel] = useState('');
   const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

  const onSubmit = (e) => {
        e.preventDefault();
        if(label !== '') onAdded(label);
        setLabel('');      
    }
         
     return (
       <form className="add-item d-flex"
             onSubmit={onSubmit}>
           <input type="text"
                  className="form-control"
                  onChange = {onLabelChange}
                  placeholder= "What needs to be done"
                  value={label}/>
           <button 
           className="btn btn-outline-secondary"
           type='button'
           onClick = {onSubmit}
           title = 'Add new ToDo item'
           >Add</button>
       </form> 
    )  
}


export default AddItem;

