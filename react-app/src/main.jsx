import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
//import {LoveHead, LoveBody, LoveFoot} from './Components/funfact'
import Card from './Components/BusinessCard'

//REACT FUNFACT APP -- Uncomment to view
    
//     function LoveReact() {
//         return (
//             <div id="container">
//             <LoveHead />
//             <LoveBody />
//             <LoveFoot />
//             </div>
//         )
//     }
    
// createRoot(document.querySelector("#funfact-app")).render(<LoveReact />)

//DIGITAL BUSINESS CARD APP -- Uncomment to view

createRoot(document.querySelector("#business-card")).render(<Card />)