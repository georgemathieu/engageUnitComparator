import './App.css';
import EntityList from './components/EntityList.tsx';



function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FE:Engage Stats comparator</h1>
      <div className="App">
        <EntityList />
        <EntityList />
      </div>
    </div>

  );
}

export default App;
