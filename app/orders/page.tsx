import { Header, Sidebar } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className="flex bg-dark-background">

      <div className="w-1/5 ">
        <Sidebar/>
      </div>

      <div className="w-4/5 ">
        <Header />
        <h2>Orders</h2>
      </div>

    </div>
  )
}

export default page