import React, {Component} from 'react';
import './Person.css';
import Popup from 'reactjs-popup';
import './Popup.css';
class Person extends Component{
    constructor(){
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',

            errors: {
                fname: false,
                lname: false,
            }
        }
    };

    handleOnChange = e => {
        const {target: {id, value}} = e;
        this.setState({
            [id]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const {fname, lname, email, phone} = this.state;

        this.setState({
            errors: {
                fname: fname === '',
                lname: lname === '',
            }
        });
    }
    render(){
        const overlayStyle = {background: 'rgba(0,0,0,0.5)'}; 
        return(
            <div className="Person">
                <h1>Contacto</h1>
                <form className="Box" onSubmit={this.handleOnSubmit}>
                    <br/>
                    <label for="fname">
                        <strong>Name</strong>
                        <br/>
                        <input 
                            type="text" 
                            id="fname" 
                            onChange={this.handleOnChange} 
                            className={this.state.errors.fname ? 'error' : ''}
                        />
                    </label>
                    {   
                        this.state.errors.fname 
                        && 
                        <div className='errorMessage'>Required</div>
                    }
                    <br/>
                    <label for="lname">
                        <strong>Last name</strong>
                        <br/>
                            <input 
                                type="text" 
                                id="lname" 
                                onChange={this.handleOnChange} 
                                className={this.state.errors.lname ? 'error' : ''}
                            />
                    </label>
                    {   
                        this.state.errors.fname 
                        && 
                        <div className='errorMessage'>Required</div>
                    }
                    <br/>
                    <label for="email" className="Text"><strong>Email</strong></label><br/><br/>
                    <input type="text" id="email" onChange={this.handleOnChange} className="Input"/><br/><br/>
                    <label for="phone" className="Text"><strong>Mensaje</strong></label><br/><br/>
                    <input type="text" id="phone" onChange={this.handleOnChange} className="Input"/><br/><br/>
                    <Popup trigger={<button className="button"><strong> Enviar </strong></button>} modal {...{overlayStyle}}>
                        {close => (
                            <div className='modal'>
                                <button className='close' onClick={close}>X</button>
                                <div className='header'> Person Information </div>
                                <div className='content'>
                                    {' '}
                                    Name: {this.state.fname} {this.state.lname}<br/>
                                    Email: {this.state.email}<br/> 
                                    mensaje: {this.state.phone}
                                </div>
                                <div className='actions'>
                                <button
                                    className="button"
                                    onClick={() => {
                                        close();
                                    }}
                                >
                                close modal
                                </button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </form>
            </div>
        )
    }
}

export default Person;