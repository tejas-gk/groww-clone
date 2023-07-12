import Button from '@/components/Button'
import RightSide from '@/components/Stocks/RightSide'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="md:mx-10">
      <div className='
       fixed md:hidden
       left-0
       border-t border-[#ecedef] bg-white p-12 w-full z-1000 bottom-0
      '>
      <Button/>
      </div>
      <RightSide/>
    </main>
  )
}
