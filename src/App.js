import './App.css';
import findUnits from './utils/findUnits';
import Wheel from './Wheel';

function App() {
  const data = [
    { option: 'Mẫn', style: { backgroundColor: 'blue' }, percent: 14 },
    { option: 'Ngọc', style: { backgroundColor: 'brown' }, percent: 5 },
    { option: 'Hoàng', style: { backgroundColor: 'green' }, percent: 26 },
    { option: 'Nam', style: { backgroundColor: 'red' }, percent: 24 },
    { option: 'Khánh', style: { backgroundColor: 'purple' }, percent: 24 },
    { option: 'Ly', style: { backgroundColor: 'yellow', textColor: 'black' }, percent: 8 },
  ]
  const units = findUnits(data);

  return (
    <div className="App">
      <Wheel data={data} units={units}/>
    </div>
  );
}

export default App;
