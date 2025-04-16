import React from 'react'
import {Badge, Input} from 'antd'
import {BarChartOutlined, CopyOutlined, HomeOutlined, LogoutOutlined, SearchOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined} from '@ant-design/icons'

const Header = () => {
  return (
    <div className='border-b mb-4'>
      <header className='px-6 py-4 flex items-center justify-between gap-10'>
        <div>
            <a href="/">
            <h2 className='text-2xl font-semibold md:text-4xl'> <span className='text-2xl italic font-light text-blue-500 md:text-4xl'>Well</span>POS</h2>
            </a>
        </div>
        <div className='flex-1 flex justify-center'>
            <Input 
            size='large'
             prefix={<SearchOutlined />} 
             placeholder='Ara' 
             className='rounded-xl max-w-[800px]'/>
        </div>
        <div className='flex gap-7 items-center justify-between text-center md:static fixed z-50 bottom-0 md:w-auto w-screen bg-white md:bg-transparent md:border-t-0 border-t
        md:px-0 px-8 py-1'>
          <a href={'/'} className='flex flex-col items-center hover:text-blue-500 transition-all'>
          <HomeOutlined className='text-xl md:text-2xl'/>
          <span className='md:text-xs text-[10px] text'>Ana Sayfa</span>
          </a>
          <Badge count='5' color='#3b82f6' className='md:flex hidden'  >
          <a href={'/'} className='flex flex-col items-center hover:text-blue-500 transition-all'>
          <ShoppingCartOutlined className='text-xl md:text-2xl'/>
          <span className='md:text-xs text-[10px] text'>Sepet</span>
          </a>
          </Badge>
          <a href={'/'} className='flex flex-col items-center hover:text-blue-500 transition-all '>
          <CopyOutlined className='text-xl md:text-2xl'/>
          <span className='md:text-xs text-[10px] text'>Faturalar</span>
          </a>
          <a href={'/'} className='flex flex-col items-center hover:text-blue-500 transition-all'>
          <UserOutlined className='text-xl md:text-2xl'/>
          <span className='md:text-xs text-[10px] text'>Müşteriler</span>
          </a>
          <a href={'/'} className='flex flex-col items-center hover:text-blue-500 transition-all'>
          <BarChartOutlined className='text-xl md:text-2xl'/>
          <span className='md:text-xs text-[10px] text'>İstatistikler</span>
          </a>
          <a href={'/'} className='flex flex-col items-center hover:text-red-500 transition-all'>
          <LogoutOutlined className='text-xl md:text-2xl'/>
          <span className='md:text-xs text-[10px] text'>Kapat</span>
          </a>
        </div>
        <Badge count='5' color='#3b82f6'
        className='md:hidden flex' >
          <a href={'/'} className='flex flex-col items-center hover:text-blue-500 transition-all'>
          <ShoppingCartOutlined className='text-xl md:text-2xl'/>
          <span className='md:text-xs text-[10px] text'>Sepet</span>
          </a>
          </Badge>
      </header>
    </div>
  )
}

export default Header
