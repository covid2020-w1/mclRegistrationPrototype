import Radio from '../components/Radio'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function PersonalInfo(){
    return(
      <div className="container">
        <form>
          <Link to="/phone" className='backlink'>&lt; Back</Link>
          <h1>Tell us about yourself</h1>
          <p className="description">With just a little information from you, we can access publicly available records to auto-populate the rest of your details.</p>
          <label className="input">
            <span className="generic-label">Date of birth (MM/DD/YYYY)</span>
            <input type="date" className="generic-input"/>
          </label>
          <label className="input">
            <span className="generic-label">Legal sex</span>
            <select className="generic-input">
                <option>Male</option>
                <option>Female</option>
            </select>
          </label>
          <Button path="/nameAndEmail" />
        </form>
      </div>
    )
}
