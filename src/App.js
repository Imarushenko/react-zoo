import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
