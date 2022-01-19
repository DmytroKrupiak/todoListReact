import React, {Component} from 'react';

import './add-item.css';


export default class AddItem extends Component{
   

    state = {
        label:'',
    };

    onLabelChange = (e) => {
        this.setState({label:e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.label !== '') this.props.onAdded(this.state.label);
        this.setState({
            label:''
        });
        
    }
 
    render(){ 
           
     return (
       <form className="add-item d-flex"
             onSubmit={this.onSubmit}>
           <input type="text"
                  className="form-control"
                  onChange = {this.onLabelChange}
                  placeholder= "What needs to be done"
                  value={this.state.label}/>
           <button 
           className="btn btn-outline-secondary"
           type='button'
           onClick = {this.onSubmit}
           title = 'Add new ToDo item'
           >Add</button>
       </form> 
    )}

    
}


