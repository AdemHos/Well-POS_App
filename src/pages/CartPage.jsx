import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { Table,Card,Button,Modal } from 'antd';
import CreateInvoice from '../components/Cart/CreateInvoice';

const CartPage = () => {
  const [isModalOpen,setIsModalOpen] = useState(false)
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <>
      <Header/>
      <div className="px-6">
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
        <div className="cart-totals flex justify-end mt-4">
          <Card className='w-72'>
           <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>549 ₺</span>
           </div>
           <div className="flex justify-between my-2">
            <span>KDV %</span>
            <span className='text-red-600'>5.49 ₺</span>
           </div>
           <div className="flex justify-between">
            <b>Toplam</b>
            <b>549 ₺</b>
           </div>
           <Button type='primary' size='large' className='w-full mt-4 '
           onClick={() =>setIsModalOpen(true)}  >
                Sipariş Oluştur
            </Button>
          </Card>
        </div>
     </div> 
     <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      
    </>
  )
}

export default CartPage
