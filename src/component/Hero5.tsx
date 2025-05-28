
import FAQ from './FAQ'

const Hero5 = () => {
  return (
    <div className=' min-h-screen pt-20 space-y-10 pb-60'>
      <div className='text-center space-y-5'>
        <h1 className='text-gray-800 md:text-6xl text-4xl font-phudu'>HAVE A QUESTION?</h1>
        <p className='font-vietnam md:text-base text-sm text-gray-800'>Common questions you may have, providing clear and <br/> concise information to help you understand</p>
      </div>
      <div>
        <FAQ/>
      </div>
    </div>
  )
}

export default Hero5
