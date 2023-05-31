import { XMarkIcon } from '@heroicons/react/24/solid'

const MenuCard = props => {
  const { id,title, imageUrl, modulo } = props
 
  return (
    <div className="inline-block items-center mb-3 ss:p-1 sm:p-7">
        <p className='text-xl text-black font-medium text-center mb-2'>{title}</p>
      <div className='flex items-center gap-2'>
        <figure className='ss:w-20 sm:w-40 ss:h-20 sm:h-40'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        
      </div>
     
      <div className='flex items-center gap-1'>
        <p className='text-md '>Modulo: {modulo}</p>
    
      </div>
    </div>
  )
}

export default MenuCard