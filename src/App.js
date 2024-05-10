import logo from './logo.svg';
import './App.css';
import constr from './media/images/under.png'

function App() {
  return (
    <div className="App">
      <nav className='nav_web'>
        <a className='more'>≡</a>
        <div></div>
        <a className='nav_items_web' id='about' href="/about">About</a>
        <a className='nav_items_web' id='projects' href="/projects">Projects</a>
        <a className='nav_items_web' id='contact' href="#">Contact</a>
        <div></div>
      </nav>

      <nav className='nav_mob'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </nav>

      <div className="name">Krishna</div>
      <div className="name">Anilkumar</div>
      <div>
        <img className='under' src={constr} />
      </div>
    </div>
  );
}

export default App;
