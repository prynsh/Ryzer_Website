
import './App.css'
import Hero from './component/Hero'
import Hero2 from './component/Hero2'

function App() {

  return (
    <>
      <div className=' min-h-screen space-y-10 pt-24'>
        <div>
        <Hero/>
        <div className=''>
        <Hero2/>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
