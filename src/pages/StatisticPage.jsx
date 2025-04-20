import React from 'react'
import Header from '../components/Header/Header'
import StatisticCard from '../components/Statistic/StatisticCard'
import DemoArea from '../components/Charts/AreaCharts'
import DemoPie from '../components/Charts/DonutChart'



const StatisticPage = () => {
  return (
    <>
    <Header/>
      <div className="px-6 pb-20 md:pb-20">
       <h1 className="font-semibold text-4xl text-center mb-4">İstatistiklerim</h1>
       <div>
        <h2 className='text-lg'>Hoş Geldin <span className='text-green-700 font-bold text-xl'>admin</span></h2>
        <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4 ">
          <StatisticCard title={'Toplam Müşteri'} amount={'15'} image={'images/user.png'}/>
          <StatisticCard title={'Toplam Kazanç'} amount={'55.000 ₺'} image={'images/money.png'}/>
          <StatisticCard title={'Toplam Satış'} amount={'25'} image={'images/sale.png'}/>
          <StatisticCard title={'Toplam Ürün'} amount={'155'} image={'images/product.png'}/>
        </div>
        <div className='flex justify-between gap-10 lg:flex-row flex-col '>
          <div className='lg:w-1/2 lg:h-full h-72'>
            <DemoArea/>
          </div>
          <div className='lg:w-1/2 lg:h-full h-72'>
            <DemoPie/>
          </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default StatisticPage
