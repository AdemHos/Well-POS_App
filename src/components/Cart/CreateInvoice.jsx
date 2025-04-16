import React, { useState } from 'react'
import { Modal,Form, Input, Select, Card,Button} from 'antd'

const CreateInvoice = ({isModalOpen,setIsModalOpen}) => {
    const onFinish = (values) => {
        console.log('Received values of form',values)
    }

  return (
    <div>
      <Modal title='Fatura Oluştur' open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)} >
       <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Müşteri İsmi / Adres'
           rules={[{required: true,message: 'Username is required'}]}
           name={'customerName'}>
             <Input placeholder='Müşteri İsmi'/>
          </Form.Item>
          <Form.Item label='Telefon Numarası' 
          rules={[{required: true,
            message: 'User phone is required'
          }]}
          name={'phoneNumber'}
          >
             <Input placeholder='Telefon Numarası Giriniz' maxLength={11}/>
          </Form.Item>
          <Form.Item label='Ödeme Yöntemi' rules={[{required: true,message: 'Payment way is required'}]}
          name={'paymentMode'}>
             <Select placeholder='Bir Ödeme Yöntemi Seçiniz'>
                <Select.Option value='Nakit'>Nakit</Select.Option>
                <Select.Option value='Kredi Kartı'>Kredi Kartı</Select.Option>
             </Select>
          </Form.Item>
          <div className='flex justify-end mt-4'>
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
           <div className='flex justify-end mt-4'>
           <Button type='primary' size='medium' className=''
           onClick={() =>setIsModalOpen(true)} 
           htmlType='submit' >
                Sipariş Oluştur
            </Button>
           </div>
          </Card>
          </div>
       </Form>
     </Modal>
    </div>
  )
}

export default CreateInvoice
