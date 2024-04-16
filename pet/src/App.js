import logo from './logo.svg';
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
          <div className='card'>Hi there! I'm Diana Kobets, but on the web dev scene, I go by the name skidiko. In my free time I like to learn new stuff, read up on the latest tech, and watch conferences. I'm always up for joining a new team and picking up some new skills. I can take criticism in my stride and listen to what others have to say. I prefer to work things out for myself, but I don't mind asking for help when I need it. I organize my time well so I always get things done on time. In love with sports and a good detective story.</div>
          <img src = {ellipce} className='card-img'></img>
        </div>
        <button className='resume-button'>resume </button>
      </body>
      <footer>
  <p>Phone</p>
  <p>+7 (925) 486 99-80</p>
  <p>Email</p>
  <p>dianacobets@yandex.ru</p>
  <p>Follow me</p>
  <a href="https://github.com/DianaKobets" target="_blank" rel="noopener noreferrer">Git</a>
</footer>
    </div>
  );
}

export default App;
