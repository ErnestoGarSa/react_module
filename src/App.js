import './App.css'
import products from "./Mocks/products"
import List from "./Components/List/index"

function App () {
  return (
    <div className='App'>
      <List productsData={products} />
    </div>
  )
}



export default App