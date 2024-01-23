import AddCartBtn from "./AddCartBtn"
import "./Product.css"

const Product = () => {
  return (
    <div className="product">
            <img className="product__img" src="https://picsum.photos/180" alt="product" />
            <h2 className="product__name">camisa</h2>
            <div className="product__details">
                <p className="product__old">S/ 200</p>
                <p className="product__price">S/ 100</p>
            </div>
            <AddCartBtn/>
    </div>
  )
}

export default Product