import logo from './logo.svg';
import './CSS/App.css';


function App() {
  return (
    <div className="App">
      <div className='img-man'>
        <img src='./img/image 3.png' id='man-img'></img>
      </div>
      <div className='center-block'>
        <div className='center-img'>
          <img src='./img/image 5.png'></img>
        </div>
        <div className='Stintikss_heading'>
          <p>Stintikss To Do</p>
        </div>
        <div className='addition-to-do'>
          <p>To Do поможет вам сосредоточиться на любом занятии — от работы до игры.</p>
        </div>
        <div className='button-go-work'>
          <button>Начало работы</button>
        </div>
        <div className='social'>
          <img src='./img/GitHub.png'></img>
          <img src='./img/VK.png'></img>
          <img src='./img/TG.png'></img>
        </div>
      </div>
      <div className='img-woman'>
      <img src='./img/image 4.png' id='woman-img'></img>
      </div>
    </div>
  );
}

export default App;
