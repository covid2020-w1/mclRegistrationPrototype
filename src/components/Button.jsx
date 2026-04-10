import { Link } from 'react-router-dom'

export default function Button({ path }){
    return(
        <Link 
            to={path} 
            className="next-button"
        >
            Next
        </Link>
    )
}

