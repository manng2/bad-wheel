import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import findUnits from './utils/findUnits';

function WheelUI(props) {
  const { data } = props;
  const [isStart, setIsStart] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const totalUnits = data.reduce((a, b) => {
    return a + b.percent;
  }, 0)
  const units = findUnits(data);

  const start = () => {
    const randomNumber = Math.floor(Math.random() * totalUnits);
    setPrizeNumber(units[randomNumber]);
    console.log(units, randomNumber, totalUnits, units[randomNumber]);
    setIsStart(true);
  }

  return (
    <>
      <Wheel
        mustStartSpinning={isStart}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={() => setIsStart(false)}
      />
      <button onClick={start}>Wheel</button>
    </>
  )
}
export default WheelUI;
