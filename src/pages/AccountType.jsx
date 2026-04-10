import Radio from '../components/Radio'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { useState, useEffect } from 'react'

export default function AccountType(){

    const [accountType, setAccountType] = useState("")

    useEffect(() => {
        console.log('accountType changed:', accountType)
    }, [accountType])

    return(
      <div className="container">
        <form>
          <h1>Choose an account type</h1>
          <p className="description">How will you use your MCL account?</p>
          <fieldset>
            <Radio 
                labelTitle="Join an existing account" 
                hasLabelDescription={true} 
                labelDescription="I want to join an existing account to work with orders and results" 
                value="existing"
                checked={accountType === "existing"}
                onChange={setAccountType}/>
            <Radio 
                labelTitle="Create a new account" 
                hasLabelDescription={true} 
                labelDescription="I'm here to take the first steps in partnering with MCL"
                value="new"
                checked={accountType === "new"}
                onChange={setAccountType}/>
            <Radio 
                labelTitle="Education" 
                hasLabelDescription={true} 
                labelDescription="I'm here for modules and certificates"
                value="education"
                checked={accountType === "education"}
                onChange={setAccountType}/>
            <Radio 
                labelTitle="Patient" 
                hasLabelDescription={true} 
                labelDescription="I'm here to do my own research"
                value="patient"
                checked={accountType === "patient"}
                onChange={setAccountType}/>
          </fieldset>
          
          <Button path={accountType==="existing" ? "/phone" : "/redirect"} />
        </form>
      </div>
    )
}
