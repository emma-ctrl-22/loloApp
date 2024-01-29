import '../App.css'
import {Link } from 'react-router-dom'
import { useState } from 'react'
function Assistant() {
    const [prompt, setPrompt] = useState("")
    const [answer, setAnswer] = useState("")

    const getMessages = () => {

    }

    return (
        <div className="ai-container">
            <div className="left-end">
                <button className="new-chat">+ New Chat</button>
                <ul>
                 
                </ul>
                <div className="ai_heading">
                    <Link to="/home">Back</Link>
                    <h4>Made by TickleCo.</h4>
                </div>
            </div>

            <div className="right-end">
                <div className="answers">

                </div>

                <div className="prompt-container">
                    <input className="prompt-input" type="text" />
                    <button className="upload-prompt" onClick={getMessages}>
                        <p>&uarr;</p>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Assistant