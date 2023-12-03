import { Header, ItemCard, MenuCard, Searchbar, Sidebar } from '@/components'
import { useState } from "react";

export default function Home() {

  return (
    <div className="flex bg-dark-background">

      <div className="w-1/5 ">
        <Sidebar/>
      </div>

      <div className="w-4/5 ">
        <Header />

        <MenuCard />
        <div className='p-5'>
          <h2 className='text-black font-bold text-2xl'>Coffee Menu</h2>
        </div>
        <ItemCard />
      </div>

    </div>
  )
}
