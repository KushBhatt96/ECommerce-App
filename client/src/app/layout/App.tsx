import { useEffect, useState } from 'react'
import { Product } from '../../app/models/product'
import Catalog from '../../features/catalog/Catalog'

const App = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products')
      const data = await response.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: `p${products.length + 1}`,
        price: (products.length + 1) * 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/2',
      },
    ])
  }
  return (
    <div className="app">
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  )
}

export default App
