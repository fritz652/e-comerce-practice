import './App.css'
import Product from './components/Product'
import ProductContainer from './components/ProductContainer'
import data from './products.json'

function App() {

  return (
    <>
      <ProductContainer>
        {data.map((product)=>
              <Product
                name={product.name}
                oldPrice={product.Price}
                newPrice={product.price - product.discount}
              />
        )}
        
      </ProductContainer>
    </>
  )
}

export default App
