import '../App.css';
import {Link,useNavigate } from 'react-router-dom' 
import axios from 'axios'
import {useState} from 'react';

function Login() {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/login",{email,password})
        .then(res =>{
            if(res.data.Status="Success"){
                console.log('Logged in');
                navigate("/home");
            }else{
                navigate("/")
            }
        })
    }
  return (
      <div className="App">
          <div className="left-side">
              <h1>lolo</h1>
              <div className="feature-div">
                  <div className="feature">
                      <div className="check"></div>
                      <h2 className="feature-txt">Version Control</h2>
                  </div><div className="feature">
                      <div className="check"></div>
                      <h2 className="feature-txt">Video Interactions</h2>
                  </div><div className="feature">
                      <div className="check"></div>
                      <h2 className="feature-txt">Version Control</h2>
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
                  <h5> Email or Password is Invalid </h5>
                  <form className="the-form" onSubmit={handleSubmit}>
                      <input type="text" onChange={(e)=>setEmail(e.target.value)} />
                      <input type="text" onChange={(e)=>setPassword(e.target.value)} />
                      <button type="submit"> Login </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default Login;
