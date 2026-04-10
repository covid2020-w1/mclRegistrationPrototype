import Radio from '../components/Radio'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function PersonalInfo(){
    return(
      <div className="container">
        <form>
          <Link to="/personalInfo" className='backlink'>&lt; Back</Link>
          <h1>Tell us about yourself</h1>
          <p className="description">The following name was found connected to your information.</p>
          <div className="data-group">
              <div className="data">
                  <p className="bolded">First name</p>
                  <p className="labelled">David</p>
              </div>
              <div className="data">
                  <p className="bolded">Last name</p>
                  <p className="labelled">Jelke</p>
              </div>
          </div>
          <label className='input'>
            <span className='generic-label'>Email</span>
            <input className='generic-input' />
          </label>
          <Button path="/nameAndEmail" />
        </form>
      </div>
    )
}
