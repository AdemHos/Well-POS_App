import { Button } from 'antd'
import {ClearOutlined, PlusOutlined,MinusOutlined} from '@ant-design/icons'
import React from 'react'

const Cart = () => {
  return (
    <div className='flex flex-col h-full max-h-[calc(100vh-_-90px)]'>
     <h2 className='bg-blue-500 text-center text-white py-4 tracking-wide
     font-bold'>Sepetteki Ürünler</h2> 
     <ul className='flex flex-col gap-y-2 py-2 overflow-y-auto'>
       <li className='flex items-center justify-between'>
        <div className='flex items-center'>
            <img src="https://bodurbitki.com/wp-content/uploads/2021/04/armut-santamaria-1c55.jpg" alt="" 
            className='w-16 h-16 object-cover'/>
            <div className='flex flex-col ml-4'>
                <b>Armut</b>
                <span>25₺ x2</span>
            </div>
            
        </div>
        <div className='flex items-center gap-x-2 mr-2'>
                <Button type='primary' size='medium' 
                className='w-full flex items-center justify-center rounded-full bg-blue-600'
                icon={<PlusOutlined/>}/>
                <span className='font-bold'>1</span>
                <Button type='primary' size='medium' 
                className='w-full flex items-center justify-center rounded-full bg-blue-600'
                icon={<MinusOutlined/>}/>
            </div>
       </li>
     </ul>
     <div className="cart-totals mt-auto">
        <div className='border-t border-b'>
            <div className='flex justify-between p-2'>
                <b>Ara Toplam</b>
                <span>99₺</span>
            </div>
            <div className='flex justify-between p-2'>
                <b>KDV %8</b>
                <span className='text-red-700'>+7.92₺</span>
            </div>
            <div className='flex justify-between p-2'>
                <b className='text-green-600 text-xl'>Genel Toplam</b>
                <span className='text-xl'>99₺</span>
            </div>
        </div>
        <div className='py-4 px-2'>
            <Button type='primary' size='large' className='w-full '  >
                Sipariş Oluştur
            </Button>
            <Button type='primary' icon={<ClearOutlined/>} size='large' className='w-full mt-2' danger  >
                Sepeti Temizle
            </Button>
        </div>
     </div>

    </div>
  )
}

export default Cart
