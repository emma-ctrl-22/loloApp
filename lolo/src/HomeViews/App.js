import {Link } from 'react-router-dom'; 
import '../App.css';

function App() {
  return (
      <div className="home-container">
          <div className="tools">
            <Link to="/AI_Assistant">
              CodeBUDDY
            </Link> 
            <Link>
              HALA
            </Link> 
            <Link>
              BITE
            </Link> 
            <Link to="/editor">
              BS CODE
            </Link>
          </div>
    </div>
  );
}

export default App;
