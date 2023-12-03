'use client'

import { CustomButton, Header, Sidebar } from '@/components'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import './cart.css'
import Link from 'next/link';
import { CartItemProps } from '@/interface';

const page = (props: CartItemProps) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([
    { 
      id: 1,
      product_image: '/espresso.jpg', 
      product_title: 'ESPRESSO', 
      product_qtn: 1, 
      product_price: 8.21
    },
    { 
      id: 2,
      product_image: '/double-espresso.jpeg', 
      product_title: 'DOUBLE ESPRESSO', 
      product_qtn: 1, 
      product_price: 8.21
    },
  ])

  const handleDelete = (id: number) => {
    setCartItems(prevData => {
      return prevData.filter(item => item.id !== id)
    })
  }

  const handleQtn = (type: string, id: number) => {
    if(type == 'INC') {
      setCartItems(prevData => {
        return prevData.map(item => {
          if(id == item.id) {
            return {
              ...item, product_qtn: item.product_qtn++
            }
          }
          return item
        }) 
      })
    } else {
      setCartItems(prevData => {
        return prevData .map(item => {
          if(id == item.id) {
            return {
              ...item, product_qtn: item.product_qtn--
            }
          }
          return item
        }) 
      })
    }
  }

  return (
    <div className="flex bg-dark-background">

      <div className="w-1/5 ">
        <Sidebar/>
      </div>

      <div className="w-4/5 ">
        <Header />
        { cartItems.length > 0 ?
        
          <>
            <div className="flex justify-center mt-10">
              <h2 className="cart__heading">Your Cart(4 Items)</h2>
            </div>
            
            <div className="overflow-x-auto m-10">
                <table className="table__container">
                  <thead className="bg-red-color">
                    <tr>
                      <th className="table__heading">Item</th>
                      <th className="table__heading">Price</th>
                      <th className="table__heading">Quantity</th>
                      <th className="table__heading">Total</th>
                      <th className="table__heading"></th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    { cartItems.map((item, index) => (
                        <tr>
                          <td className="table__rows flex items-center">
                            <img src={item.product_image} alt="Product Image" className="cart__image"/>
                            <div className="flex flex-col">
                              <span className="cart_product_title">{item.product_title}</span>
                            </div>
                          </td>
                          <td className="table__rows">$ {item.product_price}</td>
                          <td className="table__rows">
                            <button className="cart_qun_btn" onClick={()=>handleQtn("DEC", item.id)}>-</button>
                            <span className="px-2 py-1">{item.product_qtn}</span>
                            <button className="cart_qun_btn" onClick={()=>handleQtn("INC",item.id)}>+</button>
                          </td>
                          <td className="table__rows">$ {(item.product_price * item.product_qtn).toFixed(2)}</td>
                          <td className="table__rows">
                            <button onClick={()=> handleDelete(item.id)} className="text-2xl"><MdDelete /></button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>           
            </div>
          </>

          : 
          <div className="flex flex-col items-center mt-10 gap-5">
            <img src="./empty-cart.png" height={300} width={300} className=""/>
            <h1 className="font-semibold font-display text-2xl">Your Cart is Empty</h1>
            <Link href={'/'}>
              <CustomButton
                text={"Return to Shop"}
                width="w-60"
                backgroundColor="bg-orange-color"
              />
            </Link>
          </div>
        }

      </div>

    </div>
  )
}

export default page