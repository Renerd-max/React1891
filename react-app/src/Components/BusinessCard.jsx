import React from "react"

export default function Card(){
    return(
        <div id="out-card">
            <div id="in-card">

                <img id="cover-image" src=".\src\Images\Rectangle 90-image.png" alt="cover image" />    

                <h1 id="name">Laura Smith</h1>
                <p id="title">Frontend Developer</p>
                <p id="website">laurasmith.website</p>

                <div id="contact-buttons">
                    <button id="email-button"><img src=".\src\Images\Iconemail.png" alt="Email icon"></img> Email</button>
                    <button id="linkedin-button"><img src=".\src\Images\Vectorlinkedin.png" alt="LinkedIn icon"></img> LinkedIn</button>
                </div>

                <div id="in-content">
                    <div id="about">
                        <h2 className="c-h">About</h2>
                        <p className="c-p">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    </div>

                    <div id="interests">
                        <h2 className="c-h">Interests</h2>
                        <p className="c-p">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>
                </div>     

                <footer>
                <div id="footer">
                        <img className="social-icon" src=".\src\Images\Twitter Icon.png" alt="twitter" />
                        <img className="social-icon" src=".\src\Images\Facebook Icon.png" alt="facebook" />
                        <img className="social-icon" src=".\src\Images\Instagram Icon.png" alt="instagram" />
                        <img className="social-icon" src=".\src\Images\Github Icon.png" alt="github" />
                 </div>
                </footer> 
            </div>       
        </div>
    )
}