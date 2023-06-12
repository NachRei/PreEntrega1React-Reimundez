import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
