import './styles.css'
import IMAGE from './Austin-Image.jpg'
import Counter from './Counter'

const App = () => {
  return (
    <>
      <h1>ReStore Application</h1>
      <img src={IMAGE} alt="Austin Downtown" width="400" height="200" />
      <Counter />
    </>
  )
}

export default App
