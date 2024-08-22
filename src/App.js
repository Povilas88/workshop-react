import './App.css';
import { Card } from './components/Cards';

function App() {
  return (
    <div className="App">
      <Card name="Bye world" number={0} isActive={true} />
      <Card name="Bye world" number={30} isActive={true} />
      <Card name="Bye world" number={20} isActive={false} />
      <Card name="Bye world" number={10} isActive={false} />

    </div>
  );
}

export default App;
