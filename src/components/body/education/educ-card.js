import React from 'react'
import './educ-card.css'
function EducCard({ item }) {
  return (
    <div className='educ-card'>
      <img src={item.companyLogo} className='educ-logo' alt='comp-logo'/>
      <div className='educ-info'>
        <label className='educ-item'>{item.company}</label>
        <div className='educ-dates'>
          <label>{item.dateJoining}</label><label>{item.dateEnd}</label>
        </div>
        <div className='educ-desc'>
          <p>{item.work}</p>

        </div>
      </div>
    </div>
  )
}

export default EducCard