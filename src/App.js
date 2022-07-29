import './App.css';
import Wheel from './Wheel';

function App() {
  const data = [
    { option: 'Hoàng', style: { backgroundColor: 'green', textColor: 'black' }, percent: 25 },
    { option: 'Nam', style: { backgroundColor: 'white' }, percent: 25 },
    { option: 'Khánh', percent: 25 },
    { option: 'Ly', percent: 5 },
    { option: 'Mẫn', percent: 20 },
    { option: 'Ngọc', percent: 5 },
  ]
  return (
    <div className="App">
      <Wheel data={data}/>
    </div>
  );
}

export default App;
