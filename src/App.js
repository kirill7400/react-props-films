import './App.css';
import Stars from "./components/Stars";
import punk from './assets/img/punk.webp'
import zero from './assets/img/zero.webp'
import lotr from './assets/img/lotr.webp'

function App() {
  return (
    <div className="App">
      <div className="moviesContainer">
        <div className="movie">
          <div className="movieImg">
            <img className="img" src={punk} alt="punk"/>
          </div>
          <div className="movieInfo">
            <div>Король и шут</div>
            <Stars count={3}/>
          </div>
        </div>
        <div className="movie">
          <div className="movieImg">
            <img className="img" src={zero} alt="punk"/>
          </div>
          <div className="movieInfo">
            <div>Нулевой пациент</div>
            <Stars count={5}/>
          </div>
        </div>
        <div className="movie">
          <div className="movieImg">
            <img className="img" src={lotr} alt="punk"/>
          </div>
          <div className="movieInfo">
            <div>Властелин колец</div>
            <Stars count={999}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
