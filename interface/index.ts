export interface CartItemProps {
    id: number;
    product_image: string;
    product_title: string;
    product_price: number;
    product_qtn: number;
}

export interface ProductInterface {
    id: number;
    type: string, 
    image: string
    title: string, 
    desc: string, 
    price: number, 
    sugar:number, 
    ice: number
}