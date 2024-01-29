import '../App.css';
import {Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'

function SignUp() {
    const [email,setEmail]= useState("");
    const [name,setName]= useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
         e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then(req => {
        alert('created')
        navigate('/login')
      })
      .catch((err) => console.log(err));
    }
  return (
      <div className="App">
          <div className="left-side">
              <h1>lo
              <span>lo</span>
              </h1>
              <div className="feature-div">
                  <div className="feature">
                      <div className="check"></div>
                      <h2 className="feature-txt">Version Control</h2>
                  </div><div className="feature">
                      <div className="check"></div>
                      <h2 className="feature-txt">Video Interactions</h2>
                  </div><div className="feature">
                      <div className="check"></div>
                      <h2 className="feature-txt">Real Time Editor</h2>
                  </div><div className="feature">
                      <div className="check"></div>
                      <h2 className="feature-txt">AI Assistant</h2>
                  </div>
              </div>
              <div className="bottom-links">
                  <Link className="login-links">Terms</Link>
                  <Link className="login-links">Docs</Link>
                  <Link className="login-links">Contact Us</Link>
              </div>
          </div>
          <div className="right-side">
              <div className="container">
                  <div className="heading">
                      <h3>SignUp for an account</h3>
                  </div>
                  <form className="the-form" onSubmit={handleSubmit}>
                       <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                      <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                      <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                      <button type="submit"> Sign Up</button>
                  </form>
              </div>
          </div>
    </div>
  );
}

export default SignUp;
