import '../App.css'
import { Link } from 'react-router-dom'
import { useState, useEffect,useMemo } from 'react'
function Assistant() {
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState("")

    const getMessages = async () => {
        console.log("posted")
        try {
            const response = await fetch('http://localhost:5000/codebuddy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };


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
                <ul className="answers">
                   
                </ul>

                <div className="prompt-container">
                    <input className="prompt-input" value={prompt} type="text" onChange={(e) => setPrompt(e.target.value)} />
                    <button className="upload-prompt" onClick={getMessages}>
                        <p>&uarr;</p>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Assistant