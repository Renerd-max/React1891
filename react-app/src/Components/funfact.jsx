import React from "react"

export function LoveHead() {
    return (
        <header>
        <nav className="nav">
         <div className="logo-element">   
        <img src=".\src\Images\react-logo.png" id="logo" />
        <h1 className="logo-title">ReactFacts</h1>
        </div>
        <p className="list-items">
            React Project - 1
        </p>
        </nav>
        <div className="gutter"></div>
        </header>
    )
    }
    
    export function LoveBody() {
        return (
            <div id="body">
            <h1>This Is Why I Love React</h1>
            <ul>
                <li>Its easier than JavaScript (I believe)</li>
                <li>Its popular</li>
                <li>There is a market for it</li>
                <li>Its challenging</li>
            </ul>
            </div>
        )
    }
    
    export function LoveFoot() {
        return (
            <footer id="foot">
                <small>C 2022 Oyedoyin. All rights reserved.</small>
            </footer>
        )
    }
