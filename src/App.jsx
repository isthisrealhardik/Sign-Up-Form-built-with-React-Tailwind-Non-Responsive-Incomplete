const FormComp = () => {
  return (
    <div className=" bg-white w-[450px] rounded-md drop-shadow-2xl h-[400px] mt-5">
      <form className="flex flex-col items-center">
        <input type={'text'} placeholder={'First Name'} className=' mt-8 my-2 h-12 w-[380px] bg-white border border-solid border-grayishBlue rounded-md text-grayishBlue font-semibold text-xs pl-6 hover:border-Blue hover:text-darkBlue active:text-darkBlue'></input>
        <input type={'text'} placeholder={'Last Name'} className=' my-2 h-12 w-[380px] bg-white border border-solid border-grayishBlue rounded-md text-grayishBlue font-semibold text-xs pl-6 hover:border-Blue hover:text-darkBlue active:text-darkBlue'></input>
        <input type={'email'} placeholder={'Email Address'} className=' my-2 h-12 w-[380px] bg-white border border-solid border-grayishBlue rounded-md text-grayishBlue font-semibold text-xs pl-6 hover:border-Blue hover:text-darkBlue active:text-darkBlue'></input>
        <input type={'password'} placeholder={'Password'} className=' my-2 h-12 w-[380px] bg-white border border-solid border-grayishBlue rounded-md text-grayishBlue font-semibold text-xs pl-6 hover:border-Blue hover:text-darkBlue active:text-darkBlue'></input>
        <button type={'submit'} className=' hover:bg-red bg-green border-none rounded-md drop-shadow-2xl my-2 h-12 w-[380px] uppercase'>claim your free trial</button>
        <p className=" my-1 text-grayishBlue text-[10px]">By clicking this button, you are agreeing to our <span className="text-red font-semibold">Terms and Services</span></p>
      </form>
    </div>
  )
}

const TrialComp = () => {
  return (
    <div className=" w-[450px] drop-shadow-2xl h-12 bg-Blue rounded-md flex items-center justify-center px-3">
      <p className=" text-sm">
        <span className="font-semibold">Try it free 7 days</span> then $20/mo. thereafter
      </p>
    </div>
  )
}

function App() {
  return (
    <div className=" px-40 w-screen h-screen bg-red bg-bgImagge bg-no-repeat bg-cover bg-center flex items-center justify-center font-sans">
      <div className="px-12">
        <h1 className="font-bold py-6 text-5xl">Learn to code by watching other</h1>
        <p className="font-semibold text-sm">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
      </div>
      <div>
        <TrialComp />
        <FormComp />
      </div>
    </div>
  )
}

export default App
