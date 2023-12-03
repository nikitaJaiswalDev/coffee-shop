'use client'
import { useState } from 'react'
import styles from './MenuCard.module.css'

const MenuCard = () => {
  const [selectedMenu, setSelectedMenu] = useState("bg-red-100")
  console.log({ selectedMenu});
  
  const Menus = [
    { title: 'Juice', icon: '/juice.png', active: true},
    { title: 'Coffee', icon: '/coffee-cup.png', active: false},
    { title: 'Milky Milk', icon: '/milk.png', active: false},
    { title: 'Bobaan', icon: '/bobaan.png', active: false},
    { title: 'Ice Cream', icon: 'ice-cream.png', active: false},
    { title: 'Desert', icon: '/desart.png', active: false},
  ]
  return (
    <div className={styles.main__wrapper} >
      {Menus.map((menu, index) => (
        <div key={index} className={`${styles.menu__container}`}  >
          <div className={styles.image__wrapper}>
            <img
              className="object-contain"
              src={menu.icon}
              alt="Placeholder"
              height={70}
              width={70}
            />
          </div>
          <div className="p-4">
            <h2 className="font__light">
              {menu.title}
            </h2>
          </div>
        </div>
        
      ))}
    </div>

  )
}

export default MenuCard