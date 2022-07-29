import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import './Wheel.css';
import sound from './assets/gunshot.mp3';

function WheelUI(props) {
  const { data, units } = props;
  const [isStart, setIsStart] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const totalUnits = data.reduce((a, b) => {
    return a + b.percent;
  }, 0)

  const start = () => {
    const save = [];
    for (let i = 0; i < 1000000; i++) {
      const randomNumber = Math.round(Math.random() * (totalUnits - 1), 1);
      const x = data[units[randomNumber]].option;
      save[x] = save[x] ? ++save[x] : 1;
    }

    console.log(save);
    const randomNumber = Math.round(Math.random() * (totalUnits - 1), 1);
    setPrizeNumber(units[randomNumber]);
    console.log(units, randomNumber, totalUnits, data[units[randomNumber]].option);
    setIsStart(true);
  }

  const onStopSpinning = () => {
    const audio = new Audio(sound);
    audio.play();

    setIsStart(false);
  }

  return (
    <div className='wheel-container'>
      <div className='title'>Ún rịu</div>
      <Wheel
        mustStartSpinning={isStart}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['red', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={onStopSpinning}
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
