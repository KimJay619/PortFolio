import ReviewList from './ReviewList';
import useFetch from './useFetch';
import './ReviewList.css'
const ViewReview =()=>{
    const {data:Review, isPending, error} = useFetch("http://localhost:8000/Review");
 
    const title="Review List"
    const description ="You can view the Review List Here:"
    
    return(
        <div className='Content'>
            <div id="Reviewlot">
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            <hr></hr>
            <br></br>
            <div className='ViewReview'>
                {error&& <div>{error}</div>}
                {isPending&&<div>loading....</div>}
                {Review&&<ReviewList Review={Review} Reviewlist ="Our Review:"/>}
            </div>
        </div>
    );

}
export default ViewReview;