import React from 'react'
import Header from '../components/Header/Header'

const StatisticPage = () => {
  return (
    <>
    <Header/>
      <div className="px-6">
       <h1 className="font-semibold text-4xl text-center mb-4">İstatistiklerim</h1>
       <div>
        <h2 className='text-lg'>Hoş Geldin <span className='text-green-700 font-bold text-xl'>admin</span></h2>
       </div>
      </div>
    </>
  )
}

export default StatisticPage
