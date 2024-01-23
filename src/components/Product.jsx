import AddCartBtn from "./AddCartBtn"
import Discount from "./Discount"
import Heart from "./Heart"
import "./Product.css"


const Product = ({discount, oldPrice, newPrice, name }) => {
  return (
    <div className="product">
            <Discount discount = {((discount / oldPrice)*100).toFixed(0)}/>
            <Heart/>
            <img className="product__img" src="https://picsum.photos/180" alt="product" />
            <h2 className="product__name">{name}</h2>
            <div className="product__details">
                <p className="product__oldPrice">S/ {oldPrice}</p>
                <p className="product__price">S/ {newPrice}</p>
                <AddCartBtn/>
            </div>
    </div>
  )
}

export default Product