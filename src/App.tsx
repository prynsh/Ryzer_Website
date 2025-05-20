
import './App.css'
import Hero from './component/Hero'
import Topbar from './component/Topbar'

function App() {

  return (
    <>
      <div className=' min-h-screen'>
        <div>
        <Topbar/>
        </div>
        <div>

        <Hero/>
        </div>
        </div>
    </>
  )
}

export default App
