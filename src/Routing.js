import App from './App'
import {Routes,BrowserRouter as Router,Route } from "react-router-dom";
import Projects from './Projects';
import About from './About';

function Routing(){
    return(
        <Router>
        <Routes>
            <Route exact path="/" element={<App/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
          </Router>
    )
}
export default Routing;