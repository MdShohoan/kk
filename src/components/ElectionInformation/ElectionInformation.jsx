import React from 'react'
import SeatInformation from './SeatInformation/SeatInformation'
import MapInformation from './MapInformation/MapInformation'

function ElectionInformation() {
  return (
    <div className='container m-auto'>
        <div className='grid grid-cols-2 gap-8'>
            <MapInformation/>
            <SeatInformation/>
        </div>
    </div>
  )
}

export default ElectionInformation