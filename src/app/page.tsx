import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import LeftSide from '@/components/Stocks/LeftSide'
import RightSide from '@/components/Stocks/RightSide'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="md:mx-10">
      <Navbar/>
      <div className='
       fixed md:hidden
       left-0
       border-t border-[#ecedef] bg-white p-12 w-full z-1000 bottom-0
      '>
      <Button/>
      </div>

      <div className='max-w-[1110px] w-full mx-auto'>
      <div className='
        mx-auto mt-0
        relative items-start my-60
        '>
      <div className='flex h-auto items-stretch justify-between'>
      {/* <div className='
        
        '> */}
      <LeftSide/>
      <RightSide/>
          {/* </div> */}
          </div>
      </div>
        </div>
    </main>
  )
}
