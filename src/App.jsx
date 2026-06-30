import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import './index.css';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <ListaNoticias />
        </main>
    </div>
  );
}


export default App;