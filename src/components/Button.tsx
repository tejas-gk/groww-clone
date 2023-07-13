import React from 'react'

interface ButtonProps{
    text?:string
}
function Button({
    text='Buy Now'
}:ButtonProps) {
    return (
        <div className='
       w-full
       h-[45px]
        inline-block
        font-medium
        rounded-md
        relative
        cursor-pointer
        whitespace-nowrap
        select-none
      '
        >
            
      <div className='
        bg-[#00d09c]
        text-white
        flex
        items-center
        justify-center
        h-inherit
      '>
          <span className='
            py-2 px-[25px]
            flex
        items-center
        justify-center
          '>
              {text}
          </span>
        </div>
              
      </div>
  )
}

export default Button