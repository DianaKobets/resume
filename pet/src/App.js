
import './App.css';
import Navbar from'./navbar'
import ellipce from './Ellipse 1.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <body>
        <div className='first-line'>
         <div className='box'><div className='text'>Hi there! I'm Diana Kobets, but on the web dev scene, I go by the name skidiko. In my free time I like to learn new stuff, read up on the latest tech, and watch conferences. I'm always up for joining a new team and picking up some new skills. I can take criticism in my stride and listen to what others have to say. I prefer to work things out for myself, but I don't mind asking for help when I need it. I organize my time well so I always get things done on time. In love with sports and a good detective story.</div></div>
          <img src = {ellipce} className='card-img'></img>
        </div>
        <button className='resume-button'>resume </button>
      </body>
      <footer>
        <hr/>
        <div  className='contacts'>
            <p>Phone <br/><a href="tel:+79254869980">+7 (925) 486 99 80</a></p>
            <p>Email <br/><a href='mailto:dianacobets@yandex.ru'>dianacobets@yandex.ru</a></p>
            <p>Follow me <br/><a href="https://github.com/DianaKobets" target="_blank" rel="noopener noreferrer">Git</a></p>
          </div>
          <p style={{color: '#CBCBCB', display: 'flex', justifyContent: 'center', fontSize: '12px'}}> ©2024 - skidiko</p>
      </footer>
    </div>
  );
}

export default App;
