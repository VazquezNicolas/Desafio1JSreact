
import './App.css';
import Navbar from './components/navbar/navbarJSX';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer greeting = {'¡Bienvenido a Los Herederos de Baden Powell!'}/>
    </div>
  );
}

export default App;
