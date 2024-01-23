import AddCartBtn from "./AddCartBtn"
import "./Product.css"

const Product = () => {
  return (
    <div className="product">
            <img className="product__img" src="https://picsum.photos/180" alt="product" />
            <h2 className="product__name">camisa</h2>
            <div className="product__details">
                <p className="product__oldPrice">S/ 200</p>
                <p className="product__price">S/ 100</p>
                <AddCartBtn/>
            </div>
    </div>
  )
}

export default Product