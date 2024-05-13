import logo from './logo.svg';
import './App.css';
import constr from './media/images/under.png'
import ico from './media/images/k_icon_cut_pg.png'
import blb from './media/images/bulb.png'
function App() {
  return (
    <div className="App">
      <div className="parent">
      <div className="nav">
        <div><img src={ico} className="ico"></img></div>
        <div className="nav_items"><a href="#">About</a></div>
        <div className="nav_items"><a href="/projects">Projects</a></div>
        <div className="nav_items"><a href="#">Contact</a></div>
        
        
      </div>
      <div className="main_content">
      <div className="space"></div>
      <div className="name_content">
        <div className="hi">hi,Im</div>
        <div className="web_name" id="krishna">Krishna</div>
        <div className="web_name" id="anil">Anilkumar</div>
        <div className="desc">web developer / Frontend Developer</div>
        <div className="ps">//Site is under development</div>
      </div>
      <div></div>
      </div>
      
      </div>
    </div>
  );
}

export default App;
