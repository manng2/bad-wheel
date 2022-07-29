import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import './Wheel.css';

function WheelUI(props) {
  const { data, units } = props;
  const [isStart, setIsStart] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const totalUnits = data.reduce((a, b) => {
    return a + b.percent;
  }, 0)

  const start = () => {
    const randomNumber = Math.floor(Math.random() * totalUnits);
    setPrizeNumber(units[randomNumber]);
    // console.log(units, randomNumber, totalUnits, units[randomNumber]);
    setIsStart(true);
  }

  return (
    <div className='wheel-container'>
      <Wheel
        mustStartSpinning={isStart}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['red', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={() => setIsStart(false)}
        spinDuration={1}
        innerBorderColor={'gray'}
        innerRadius={10}
        outerBorderColor={'gray'}
        radiusLineColor={'gray'}
        innerBorderWidth={0}
      />
      <button className='btn-spin' disabled={isStart} onClick={start}>SPIN</button>
    </div>
  )
}
export default WheelUI;
