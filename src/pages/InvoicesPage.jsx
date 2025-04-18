
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { Table,Card,Button,Modal } from 'antd';
import PrintInvoice from '../components/bills/PrintInvoice';

const InvoicesPage = () => {
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
      <h1 className='text-4xl font-semibold text-center mb-4'>Faturalar</h1>
      <div className="px-6">
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
        <div className="cart-totals flex justify-end mt-4">
          <Card className='w-72'>
           
           <Button type='primary' size='large' className='w-full mt-4 '
           onClick={() =>setIsModalOpen(true)}  >
                Yazdır
            </Button>
          </Card>
        </div>
     </div> 
     <PrintInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      
    </>
  )
}

export default InvoicesPage

 

