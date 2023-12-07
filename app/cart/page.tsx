import { Cart, Header, Sidebar } from '@/components'
import './cart.css'

const page = () => {
  

  return (
    <div className="flex bg-dark-background">

      <div className="w-1/5 ">
        <Sidebar/>
      </div>

      <div className="w-4/5 ">
        <Header />
        <Cart />
      </div>

    </div>
  )
}

export default page