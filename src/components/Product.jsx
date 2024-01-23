import AddCartBtn from "./AddCartBtn"
import Discount from "./Discount"
import "./Product.css"


const Product = (props) => {
  return (
    <div className="product">
            <Discount discount = {props.discount}/>
            <img className="product__img" src="https://picsum.photos/180" alt="product" />
            <h2 className="product__name">{props.name}</h2>
            <div className="product__details">
                <p className="product__oldPrice">S/ {props.oldPrice}</p>
                <p className="product__price">S/ {props.newPrice}</p>
                <AddCartBtn/>
            </div>
    </div>
  )
}

export default Product