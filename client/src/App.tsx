import AustinImage from '../public/Austin-Image.jpg'
import { useEffect, useState } from 'react'
import { Product } from './product'

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
      <img alt="Austin" src={AustinImage} width="500" height="500" />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add</button>
    </div>
  )
}

export default App
