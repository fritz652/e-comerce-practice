import "./AddCartBtn.css"

const AddCartBtn = () => {
  return (
    <button onClick={()=>{alert("Producto agregado al carrito")}}>Comprar</button>
  )
}

export default AddCartBtn