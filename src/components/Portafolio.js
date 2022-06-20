import React from 'react';
import './Portafolio.css';
function Portafolio(){
    return(
        <div className='cur'>
            <h1>Portafolio</h1>
            <br/>
            <div className='container'>
                <div className='box'>
                <img src="https://i.pinimg.com/originals/c0/fd/ef/c0fdefa640a65dcb32b14dd078fa35fb.gif" className='duck'/>
                    <p className='title'>
                        Pomodoro
                    </p>
                    <p>
                        Loremn tu cola
                    </p>
                    <form action="./portafolio/timer">
                        <input type="submit" value="Go" />
                    </form>
                </div>
                <div className='box'>
                    <img src="https://i.pinimg.com/originals/c0/fd/ef/c0fdefa640a65dcb32b14dd078fa35fb.gif" className='duck'/>
                    <p className='title'>
                        PureComponent
                    </p>
                    <p>
                        Loremn tu cola
                    </p>
                    <form action="./portafolio/Numbers">
                        <input type="submit" value="Go" />
                    </form>
                </div>
                <div className='box'>
                    <img src="https://i.pinimg.com/originals/c0/fd/ef/c0fdefa640a65dcb32b14dd078fa35fb.gif" className='duck'/>
                    <p className='title'>
                        Popup
                    </p>
                    <p>
                        Loremn tu cola
                    </p>
                    <form action="./portafolio/popup">
                        <input type="submit" value="Go" />
                    </form>
                </div>
                <div className='box'>
                    <img src="https://i.pinimg.com/originals/c0/fd/ef/c0fdefa640a65dcb32b14dd078fa35fb.gif" className='duck'/>
                    <p className='title'>
                        Cripto
                    </p>
                    <p>
                        Loremn tu cola
                    </p>
                    <form action="./portafolio/cripto">
                        <input type="submit" value="Go" />
                    </form>
                </div>
                <div className='box'>
                    <img src="https://i.pinimg.com/originals/c0/fd/ef/c0fdefa640a65dcb32b14dd078fa35fb.gif" className='duck'/>
                    <p className='title'>
                        Calculator
                    </p>
                    <p>
                        Loremn tu cola
                    </p>
                    <form action="./portafolio/calculator">
                        <input type="submit" value="Go" />
                    </form>
                </div>
                <div className='box'>
                    <img src="https://i.pinimg.com/originals/c0/fd/ef/c0fdefa640a65dcb32b14dd078fa35fb.gif" className='duck'/>
                    <p className='title'>
                        Animation
                    </p>
                    <p>
                        Loremn tu cola
                    </p>
                    <form action="./portafolio/animation">
                        <input type="submit" value="Go" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Portafolio;