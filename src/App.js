import './App.css';
import EntityList from './components/EntityList.tsx';
import UnitComparator from './components/UnitComparator.tsx';



function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FE:Engage Stats comparator</h1>
      <div className="App">
        <UnitComparator />
      </div>
    </div>

  );
}

export default App;
