import React from 'react'
import './education.css'
import Separator from '../../common/separator/index'
import { EducData } from '../../data/education'
import EducCard from './educ-card';
function Education() {
  const data = EducData;
  return (
    <div className='education'>
      <Separator />
      <label className='section-title'>Education</label>
      <div className='educ-list'>
        {data.map((item)=>{
          return(
            <EducCard item={item} />
            )
        })}
      </div>
    </div>
  )
}

export default Education