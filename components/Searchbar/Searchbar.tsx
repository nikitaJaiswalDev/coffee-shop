import { CiSearch } from "react-icons/ci";
import styles from './Searchbar.module.css'

interface SearchbarProps {
  search: string,
  handleChange: () => void
}
const Searchbar = (props: SearchbarProps) => {
  return (
    <form className="">
      <div className="relative">
        <input type="search" placeholder="Search here.." className={styles.search__input} value={props.search} onChange={props.handleChange}/>
        <button className={styles.search__button}>
          <CiSearch />
        </button>
      </div>

    </form>
  )
}

export default Searchbar