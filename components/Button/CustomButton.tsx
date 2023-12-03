import { ProductInterface } from '@/interface';
import './CustomButton.css'

interface CustomButtonProps {
    data?: ProductInterface;
    text: string;
    handleFunction?: (data: ProductInterface) => void;
    width?: string
    backgroundColor? : string
}
const CustomButton = (props: CustomButtonProps) => {
  
  const handleClick = () => {
    if (props.data && props.handleFunction) {
      props.handleFunction(props.data);
    }
  };
  
  return (
    <button 
      className={`${props.backgroundColor ? props.backgroundColor: "bg-slate-300"} button__container ${props.width ? props.width: "w-full"}`} 
      onClick={handleClick}
      >
        <span className={`font-semibold`}>{props.text}</span>
    </button>
  )
}

export default CustomButton