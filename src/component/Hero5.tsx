
import FAQ from './FAQ'

const Hero5 = () => {
  return (
    <div className=' min-h-screen pt-20 space-y-10 pb-60'>
      <div className='text-center'>
        <h1 className='text-gray-800 text-6xl font-phudu'>HAVE A QUESTION?</h1>
        <p className='font-vietnam text-base text-gray-600'>Common questions you may have, providing clear and <br/> concise information to help you understand</p>
      </div>
      <div>
        <FAQ/>
      </div>
    </div>
  )
}

export default Hero5
