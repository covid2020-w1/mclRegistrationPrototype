import { Link } from 'react-router-dom'
import Radio from '../components/Radio'
import Button from '../components/Button'
 
export default function Contact(){
    return(
      <div className="container">
        <form>
          <Link to="/" className='backlink'>&lt; Back</Link>
          <h1>Enter your phone number</h1>
          <p className="description">We’ll provide you with a verification code to make sure this is your phone.</p>
          <label className="input">
            <span className="generic-label">Phone number</span>
            <input name="tel" type="tel" className="generic-input" placeholder="(305) 279 45556"/>
          </label>
          
            <div className="generic-label">How should we contact you?</div>
            <div className="row">
                <Radio labelTitle="Call" hasLabelDescription={false} labelDescription="" />
                <Radio labelTitle="Text" hasLabelDescription={false} labelDescription="" />
            </div>
            <Button path="/personalInfo" />
        </form>
      </div>
    )
}