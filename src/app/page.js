
'use client';
import Footer from '../../component/Footer'
import Gray from '../../component/Gray'
import Happiness from '../../component/Happiness'
import Hero from '../../component/Hero'
import Love from '../../component/Love'
import Slider from '../../component/Slider'
import Smile from '../../component/Smile'

export default function Home() {
    
  return (
    <main className='bg-black overflow-hidden text-6xl text-white'>
      <Hero/>
      <Love/>
      <Smile/>
      <Happiness/>
      <Gray/>
      <Slider/>
      <Footer/>
    </main>
  )
}
