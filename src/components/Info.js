import React from 'react'
import InfoCard from './InfoCard'
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import phone from '../assets/icons/phone.svg'
const Info = () => {
  return (
    <div className='grid md:grid-cols-3 gap-5 px-12 py-24'>
        <InfoCard img={clock} bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours"></InfoCard>
        <InfoCard img={marker} bgClass="bg-accent" cardTitle="Our Location"></InfoCard>
        <InfoCard img={phone} bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us"></InfoCard>
    </div>
  )
}

export default Info