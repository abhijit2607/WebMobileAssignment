import logo from '../logo.svg';
import React, { useState } from 'react';
import Content from './Content';

const Layout = ({children}) => {
    const [currentPage, setCurrentPage] = useState('about-me')

    const handleNavClick = (page) => {
        setCurrentPage(page)
    }

    return (
        <>
            <header className= {'App-header'} >
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Assignment 1 using </h1>
                <hr />
                <nav>
                    <ul>
                        <li><button onClick = {() => {
                            handleNavClick('about-me')
                        }}>About Me</button></li>
                        <li><button onClick = {() => {
                            handleNavClick('hobbies')
                        }}>Hobbies</button></li>
                        <li><button onClick = {() => {
                            handleNavClick('family')
                        }}>Family</button></li>
                        <li><button onClick = {() => {
                            handleNavClick('education')
                        }}>Education</button></li>
                    </ul>
                </nav>
            </header>
            <main className='App-content'><Content page={currentPage}/></main>
        </>
    );
}

export default Layout;