import { Button, Form, Input,Carousel, Checkbox } from 'antd'
import { Link, Links } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

const Login = () => {
  return (
    <div className='h-screen'>
      <div className='flex justify-between h-full'>
        <div className='flex flex-col justify-center h-full w-full px-10 xl:px-20 '>
        <h1 className='text-center font-bold text-5xl mb-2'><span className='text-blue-500 italic'>Well</span>POS</h1>
        <Form layout='vertical'>
            
            <Form.Item
            label='Email'
            name={'email'}
            rules={[{
                required: true,
                message: 'Email Alanı Boş Bırakılamaz !'
            }]}>
                <Input/>
            </Form.Item>
            <Form.Item
            label='Şifre'
            name={'password'}
            rules={[{
                required: true,
                message: 'Şifre Alanı Boş Bırakılamaz !'
            }]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item>
                <div className='flex justify-between items-center'>
                    <Checkbox>Beni Hatırla</Checkbox>
                    <Link className='text-blue-500'>Şifremi Unuttum</Link>
                </div>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='subnit' size='large'
                className='w-full'>KGiriş Yap</Button>
            </Form.Item>
        </Form>
        <div className='flex justify-center gap-2 mt-4 items-center'>
            Henüz Bir Hesabınız yok mu ?&nbsp;
            <Link to={'/register'} className='text-blue-500 font-bold'>
            Şimdi Kayıt Ol
            </Link>
        </div>
        </div>
        <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden min-w-[800px] bg-blue-600 h-full'>
        <div className='w-full h-full items-center'>
        <div className='w-full'>
       <Carousel className='!h-full px-6' autoplay>
         <AuthCarousel title='Responsive'
         image='/images/responsive.svg'
         desc='Tüm Cihaz Boyutları ile Uyumluluk'/>
         <AuthCarousel title='İstatistikler'
         image='/images/statistic.svg'
         desc='Geniş Tutulan İstatistikler'/>
         <AuthCarousel title='Müşteri'
         image='/images/customer.svg'
         desc='Müşteri Memnuniyeti Odaklı Çözüm'/>
         <AuthCarousel title='Yönetici Paneli'
         image='/images/admin.svg'
         desc='Tek Noktadan Yönetim İmkanı'/>
       </Carousel>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
