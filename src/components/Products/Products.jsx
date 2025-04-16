

const Products = () => {
  return (
    <div className='grid grid-cols-card gap-4'>
      <div className='hover:shadow-lg cursor-pointer transition-all select-none'>
        <div>
            <img
             src="https://bodurbitki.com/wp-content/uploads/2021/04/armut-santamaria-1c55.jpg" 
             alt="Arnut"
             className='object-cover w-full border' />
        </div>
        <div className='flex flex-col p-3'>
            <span className='font-bold'>Armut</span>
            <span>25₺</span>
        </div>
      </div>
      <div className='hover:shadow-lg cursor-pointer transition-all select-none'>
        <div>
            <img
             src="https://bodurbitki.com/wp-content/uploads/2021/04/armut-santamaria-1c55.jpg" 
             alt="Arnut"
             className='object-cover w-full border' />
        </div>
        <div className='flex flex-col p-3'>
            <span className='font-bold'>Armut</span>
            <span>25₺</span>
        </div>
      </div>
    </div>
  )
}

export default Products
