
import './App.css'
import Hero from './component/Hero'
import Hero2 from './component/Hero2'
import Hero3 from './component/Hero3'

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
        <Hero3/>
        </div>
    </>
  )
}

export default App
