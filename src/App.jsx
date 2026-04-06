import Radio from './Radio'

export default function App(){
  return(
    <>
      <div className="container">
        <form>
          <h1>Choose an account type</h1>
          <p>How will you use your MCL account?</p>
          <fieldset>
            <Radio labelTitle="Join an existing account" labelDescription="I want to join an existing account to work with orders and results"/>
            <Radio labelTitle="Create a new account" labelDescription="Take the first steps in partnering with MCL"/>
            <Radio labelTitle="Education" labelDescription="I'm here for mandatory modules and certificates"/>
            <Radio labelTitle="Patient" labelDescription="I'm here to do my own research"/>
          </fieldset>
          <button>Next</button>
        </form>
      </div>
    </>
  )
}
