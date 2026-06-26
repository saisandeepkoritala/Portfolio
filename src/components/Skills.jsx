import React from 'react'
import { skills } from '../data'
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function Skills() {
  return (
    <>
    {skills.map(({title, percentage,image}, index)=>(
        <div className="progress__box" key={index}>
            <div className="progress__circle">

                {/* <CircularProgressbar strokeWidth={7.5} text={`${percentage}`}
                />  */}
                <CircularProgressbarWithChildren value={percentage}>
                <img style={{ width: 50, marginTop: -5 }} src={image} alt="skill" />
              </CircularProgressbarWithChildren>

            </div>
            <h3 className="skills__title">{title}</h3>
        </div>
    ))}
    </>
  )
}

export default Skills