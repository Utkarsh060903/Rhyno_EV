import React from 'react'
import './VehiclesDisplay.css'
import { assets } from '../../assets/assets'

const VehiclesDisplay = () => {
  return (
    <div className='vehicles-display'>
        <img loading="lazy" src={assets.blackbike} alt="" />
        <img loading="lazy" src={assets.goldenbike} alt="" />
        <img loading="lazy" src={assets.groupbikes} alt="" />
        <img loading="lazy" src={assets.redbike} alt="" />
        <img loading="lazy" src={assets.bikefront} alt="" />
        <img loading="lazy" src={assets.threebikes} alt="" />
    </div>
  )
}

export default VehiclesDisplay