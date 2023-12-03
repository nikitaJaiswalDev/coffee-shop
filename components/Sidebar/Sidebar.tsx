'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { BsArrowLeftShort, BsCart2 } from "react-icons/bs";
import { FaRegUserCircle, FaBoxOpen} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname()
    
    const [open, setOpen] = useState(true)

    const Menus = [
      { title: "Dashboard", icon: <GoHome/>, route:'/'},
      { title: "Cart", icon: <BsCart2/>, route:'/cart'},
      { title: "Orders", icon: <FaBoxOpen/>,  route:'/orders'},
      { title: "Profile", icon: <FaRegUserCircle/>,  route:'/profile'},
    ];
    const handleResize = () => {
      if (window.innerWidth <= 1442) {
          setOpen(false);
      } else {
          setOpen(true);
      }
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);


  return (
    <div className={`${styles.sidebar__container} ${open ? ' w-72': 'w-20'}`}>
        <BsArrowLeftShort className={`${styles.sidebar__arrow} ${!open && 'rotate-180'}`} onClick={ ()=> setOpen(!open) }/>

        <div className="inline-flex">
          <Image src='/coffee.png' height={0} width={50} className={styles.logo__icon} alt="coffee"/>
          <h1 className={`${styles.logo__title} ${!open && 'scale-0'}`}>Coffee Shop</h1>
        </div>

        <ul className="pt-10">
          { Menus.map((menu, index) => (
            <Link href={menu.route}>
              <li key={index} className={`${styles.sidebar__items} ${pathname==menu.route && "bg-orange-color"}`}>
                <span className={styles.sidebar__icon}>{menu.icon}</span>
                  <span className={`${styles.sidebar__text} ${!open && 'hidden'}`} >{menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>
    </div>
  )
}

export default Sidebar