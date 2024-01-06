import {Link} from 'react-router-dom'
const NotFound=()=>{
    return(
        <div className='notFound' >
            <h2>404m</h2>
            <Link to="/">click to go back</Link>
        </div>
    );
}
export default NotFound;