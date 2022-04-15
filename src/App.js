import logo from './logo.svg';
import './App.css';
import SkincareContainer from './SkinCare/skincareMain';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/skincare_background.jpeg'})`,}}/>
      <h1>SkinCare Central</h1>
      <SkincareContainer></SkincareContainer>
    </div>
  );
}

export default App;
