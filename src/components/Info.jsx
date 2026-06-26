import React from 'react'
import { personalInfo } from '../data'

function Info() {

  return (
    <>
    {personalInfo.map(({title, description}, index)=>{
      return(
        <li className="infor__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description" key={index}>{description}</span>
        </li>
      )
    })}
    </>
  )
}

export default Info 