import { XMarkIcon } from '@heroicons/react/24/solid'

const MenuCard = props => {
  const { id,title, imageUrl, modulo } = props
 
  return (
    <div className="inline-block items-center mb-3 p-7">
        <p className='text-xl text-black font-medium text-center mb-2'>{title}</p>
      <div className='flex items-center gap-2'>
        <figure className='w-40 h-40'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        
      </div>
     
      <div className='flex items-center gap-2'>
        <p className='text-md '>Modulo: {modulo}</p>
    
      </div>
    </div>
  )
}

export default MenuCard