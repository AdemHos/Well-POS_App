import Header from '../components/Header/Header'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Cart from '../components/Cart/Cart'


const HomePage = () => {
  return (
    <>
      <Header/>
    <div className='flex justify-between px-6 gap-10 md:flex-row flex-col pb-24 md:pb-0'>
      <div id='categories' className=' max-h-[calc(100vh_-_112px)] overflow-y -auto md:pb-10'>
        <Categories/>
      </div>
      <div className='flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10'>
        <Products/>
      </div>
      <div className='md:-mr-[24px] md:-mt-[24px] min-w-[300px] border-l border-blue-500'>
        <Cart/>
      </div>
    </div>
    </>
  )
}

export default HomePage
