'use client'
import { useState } from "react"
import { CustomButton } from ".."
import './ItemCard.css'
import { ProductInterface } from "@/interface"
import Link from "next/link"

const ItemCard = () => {

  const sugar = [
    { id: 11, value: '20%'},
    { id: 12, value: '40%'},
    { id: 13, value: '60%'},
  ]
  const ice = [
    { id: 21, value: '20%'},
    { id: 22, value: '40%'},
    { id: 23, value: '60%'},
  ]

  const [cardDetails, setCardDetails] = useState([
    { 
      id: 1,
      type: 'coffee', 
      image: '/espresso.jpg', 
      title: 'ESPRESSO', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 2,
      type: 'coffee', 
      image: '/double-espresso.jpeg', 
      title: 'DOUBLE ESPRESSO', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 3,
      type: 'coffee', 
      image: '/ristretto.jpg', 
      title: 'RISTRETTO', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 4,
      type: 'coffee', 
      image: '/late.jpg', 
      title: 'LATTE', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 5,
      type: 'coffee', 
      image: '/cappicino.jpeg', 
      title: 'CAPPUCCINO', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 6,
      type: 'coffee', 
      image: '/irish.jpg', 
      title: 'IRISH COFFEE', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 7,
      type: 'coffee', 
      image: '/americano.jpeg', 
      title: 'AMERICANO', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 8,
      type: 'coffee', 
      image: '/vienna.jpg', 
      title: 'VIENNA', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    },
    { 
      id: 9,
      type: 'coffee', 
      image: '/flat-white.jpeg', 
      title: 'FLAT COFFEE', 
      desc: 'Hot Coffee with Extra Chocochip', 
      price: 8.21, 
      sugar: 0, 
      ice: 0
    }
  ])
  const [cartItems, setCartItems] = useState<ProductInterface[]>([])
  
  const handleButtonClick = (data: ProductInterface) => {
    const isIDExists = cartItems.some(item => item.id == data.id);
    if(!isIDExists) {
      setCartItems([...cartItems, data])
    }
  }

  const handleOption = (id: number, product_id: number, type: string) => {
    setCardDetails(prevData => {
      return prevData.map(item => {
        if(product_id == item.id && type == 'ice') {
          return {
            ...item, ice: id
          }
        }
        if(product_id == item.id && type == 'sugar') {
          return {
            ...item, sugar: id
          }
        }
        return item
      }) 
    })
  }
  return (
  <div className={"card__container"}>
    { cardDetails.map((item, index) => (
      <div key={index} className={"card__wrapper"}>
          <div className="flex">
            <div className="w-2/5 ">
                <img src={item.image} alt="Image" className="card__image" />
            </div>
            <div className="w-3/5 p-5">
                <div className="flex flex-col gap-4">
                  <div className="font__title">{item.title}</div>
                  <div className="font__light">{item.desc}</div>
                  <div className="font__extra__bold">${item.price}</div>
                </div>
            </div>
          </div>
          
            <div className="flex mt-5">
              <div className="w-1/2 ml-2 mr-2">
                  <h2 className="font__title" onClick={() => console.log(cartItems)
                  }>Sugar</h2>
                  <div className={"card__options__container"}>
                    { sugar.map((ele) => (
                        <span 
                          key={ele.id} 
                          className={`card__options__title ${item.sugar == ele.id ? "bg-red-200": "bg-slate-200"}`} 
                          onClick={() => handleOption(ele.id, item.id, 'sugar')}
                        >
                          {ele.value}
                        </span>
                    ))}
                  </div>
              </div>
              <div className="w-1/2 ml-2 mr-2">
                  <h2 className="font__title">Ice</h2>
                  <div className={`${"card__options__container"}`}>
                    { ice.map((ele) => (
                      <span 
                        key={ele.id} 
                        className={`card__options__title ${item.ice == ele.id ? "bg-red-200": "bg-slate-200"}`} 
                        onClick={() => handleOption(ele.id, item.id, 'ice')}
                      >
                        {ele.value}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          
          <div className="flex">
            { cartItems.some(cartItem => cartItem.id === item.id) ? 
            <Link href="/cart"className="w-full">
               <CustomButton 
                  data={item}
                  text={"View Cart" }
                  backgroundColor={"bg-orange-color"}
                  handleFunction={handleButtonClick}
              />
            </Link> : 

            <CustomButton 
              data={item}
              text={"Add to cart"}
              backgroundColor={"bg-slate-300"}
              handleFunction={handleButtonClick}
            />
            }
           
          </div>
      </div>
    ))}
  </div>

  )
}

export default ItemCard