import { useState } from 'react'
import './App.css'
import {  Bookmark, ChevronRight, CircleHelp, Menu, MessageSquareWarning, Search } from 'lucide-react'


const navLinks = [
  {
    id:'1',
    title:'Products',
    categories: ['Properties', 'Vehicles', 'Phone & tablet','Electronics','Food & snacks','Repair & construction','Fashion','Health & beuty','Pets','furniture','Jobs']
  },
  {
    id:'2',
    title:'Service',
    categories: ['Properties', 'Vehicles', 'Phone & tablet','Electronics','Food & snacks']
  },
  {
    id:'3',
    title:'Taka',
    categories: ['Properties', 'Vehicles', 'Phone & tablet','Electronics','Food & snacks','Repair & construction','Fashion','Health & beuty']
  }
]
function App() {
  const [activeTabId, setActiveTabId] = useState('1')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
     <main className='h-screen relative  flex sm:flex-row flex-col bg-white'>
      <div onClick={()=>setIsMenuOpen(true)} className='fixed top-0 left-0 w-full shadow bg-white *:size-8 p-2 sm:hidden'>
        <Menu/> 
      </div>
      {isMenuOpen &&
      <div onClick={()=>setIsMenuOpen(false)} className='z-40 fixed size-full top-0 left-0 bg-black/10'/>
      
      }
      <div className={`relative z-50 h-screen sm:w-52 ${isMenuOpen?"w-52":"w-0"} overflow-hidden transition-all`}>
        <aside className={`h-full sm:w-52 ${isMenuOpen?"w-52 p-4":"w-0"} transition-all overflow-hidden fixed top-0 left-0 bg-[#F7F7F7] flex flex-col justify-between  sm:py-8 sm:pl-3 sm:pr-6 border-r border-slate-300`}>
          <main className='space-y-5'>
            <div className=' flex items-center gap-0.5 px-3 py-1.5 bg-[#F0F0F0] border border-[#ddd] rounded-lg'>
              <Search className='opacity-30 size-5'/>
              <input className='placeholder:opacity-80 w-full font-semibold focus:outline-none' placeholder='Search...'/>
            </div>
            <nav className=' pl-1'>
              <div className='space-y-4'>
                {
                  navLinks.map(({categories,title,id})=>{
                    const isActive = activeTabId === id
                    return(
                      <div onClick={()=>setActiveTabId(prev => prev===id ?"":id)} key={id} className='space-y-1'>
                        <div className={`cursor-pointer  border  ${isActive ?'border-[#ddd] bg-white':"border-transparent"} hover:border-[#ddd] rounded-lg py-1 px-6 transition-all`}>
                          <h2 className='flex gap-2 text-[#333] items-center  font-bold'>{title} <ChevronRight className={`${isActive && 'rotate-90'} fill-black stroke-0 size-4 opacity-60 transition-all`}/></h2>
                        </div>
                        {
                            <ul className={`text-xs text-[#666] font-medium pl-8 space-y-2`}>
                              {
                                categories.map((c,i) =>(<li key={i} className={`  ${isActive ? "block":"hidden "} hover:text-amber-700 cursor-pointer  transition-all`}>{c}</li>))
                              }
                            </ul>
                        }
                      </div>
                    )
                  })
                }
              </div>
            </nav>
          </main>
          <div className='text-[#333] *:cursor-pointer *:flex *:gap-1 *:items-center *:p-2 *:rounded-xl *:hover:bg-[#ddd] font-bold text-xs'>
            <p><Bookmark className='size-5 text-[#666]'/>Saved items</p>
            <p><CircleHelp className='fill-[#666] text-white '/>Help center</p>
            <p><MessageSquareWarning className='fill-[#666] text-white '/>Feedback</p>
          </div>
        </aside>
      </div>

      <section className='flex-1 space-y-4 lg:p-8 p-4 sm:pt-4 sm:pr-8 lg:pr-16'>
        <h2 className='font-medium text-xl sm:text-2xl'>Popular Products</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-2'>
            {
              Array.from({length:8}).map((_,i)=>(
                <div key={i} className='font-semibold text-xl space-y-1 p-2 text-center text-[#222] hover:bg-amber-50 rounded-2xl transition-all'>
                  <img
                    src='/car.jpg'
                    alt='car'
                    className='h-60 mb-3 w-full object-cover rounded-2xl'
                  />
                  <p>2 Pcs Shirt & trouser</p>
                  <p>NGN 7000</p>
                  <p className='text-sm text-[#888]'>Daniel Kloset</p>
                </div>
              ))
            }
        </div>
      </section>
     </main>
    </>
  )
}

export default App
