import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Popupreact extends Component{
    render(){
        return(
            <div>
                <Popup trigger={<button className="button"> Open Modal </button>} modal>
                    <span> Modal content </span>
                </Popup>
            </div>
        )
    }
}

export default Popupreact;