import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkincareContainer from './skincareMain/skincare';
import ClassySkincareContainer from './classySkincare/classySkincare';
function App() {
  return (
    <div className="App">
      {/* <SkincareContainer></SkincareContainer> */}
      <ClassySkincareContainer></ClassySkincareContainer>
    </div>
  );
}

export default App;
