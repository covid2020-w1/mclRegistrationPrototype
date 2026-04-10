import { Link } from 'react-router-dom'
 
export default function Contact(){
    return(
      <div className="container">
        <form>
          <Link to="/" className='backlink'>&lt; Back</Link>
          <h1>Please contact customer service</h1>
          <p className="description">Please call customer service at 555-555-5555 and one of our agents will connect you to the right person.</p>
        </form>
      </div>
    )
}