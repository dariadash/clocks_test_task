import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import Select from 'react-select';
import './clock.scss'

export const Clocks = (props) => {
  const {
    curZone, 
    handleChangeZone, 
    selectZones, 
    index
  } = props

  const currentDate = Date.now() 
    + Number(new Date().getTimezoneOffset() * 60 * 1000)
    + Number(curZone.timezone.slice(1)) * 3600000

  const [value, setValue] = useState(new Date(currentDate));

  useEffect(() => {
    const getNewTime = () => {
      return setInterval(
        () => {
          const newTime = new Date(currentDate)
          setValue(newTime)
        },
        1000
      );
    }
    const interval = getNewTime()
    return () => {
      clearInterval(interval);
    }
  });

  return (
    <div className="clock-view-item">
      <div className="clock-item-wrapper">
        <Clock
          value={value}
          size={200}
          renderHourMarks={true}
          renderMinuteMarks={false}
          minuteHandLength={80}
          hourHandLength={40}
          secondHandOppositeLength={10}
          minuteHandOppositeLength={0}
          hourHandOppositeLength={0}
        />
        <p>{value.toLocaleTimeString()}</p>
        <Select
          value={curZone}
          onChange={(selectValue) => handleChangeZone(index, selectValue)}
          options={selectZones}
        />
      </div>
    </div>
  )
}
