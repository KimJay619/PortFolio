import { useState } from 'react';
import '../src/CreateReview.css'
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from "react-router-dom";
const CreateReview =()=>{
    const navigate =useNavigate();
    const[Name, setName] =useState('');
    const [RatingValue, setRatingValue] = useState(0);
    const[Title, setTitle] =useState('');
    const[Message, setMessage] =useState('');
    const[isPending, setisPending] =useState(false);
    /////////////////////rate/////////////////////////////
    const handleRating = (rate) => {
        // Update RatingValue with the selected rating
        setRatingValue(rate);
    };
    /////////////////////rate/////////////////////////////
    const handleSubmit = (e) => {
        e.preventDefault();
        const Review = { Name, Rating: RatingValue, Title, Message }; // Use RatingValue here
        console.log(Review);
        setisPending(true);
        fetch('http://localhost:8000/Review', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(Review)
        }).then(() => {
            console.log("Review is Posted");
            setisPending(false); // Move this inside the fetch .then() block
        }).then(()=>{
            navigate('/ReviewList');
        });
    };
    const title ="Welcome to Review Page"
    const description ="You can Leave a Review in here if you have message to deliver "
    return(
        <div className="content">
            <h1 className='text-white'>{title}</h1>
            <p className='text-white'>{description}</p>
            <hr></hr>
            <br></br>
            <div className="create">
                <h2 className='text-white'>Adding new Review</h2>
                <form onSubmit={handleSubmit}>
                    <label className='text-white'>Name:&emsp;</label>
                    <input name="name" type="text" required value ={Name} onChange= {(e)=>setName(e.target.value)}/>
                    <br></br>
                    <label className='text-white'>Rating:&emsp;</label>
                    <Rating
                        onClick={handleRating}
                        ratingValue={RatingValue} // Use RatingValue as the rating value
                    />
                    <br></br>
                    <label className='text-white'>Title:&emsp;</label>
                    <input name="department" type="text" required value ={Title} onChange= {(e)=>setTitle(e.target.value)}/>
                    <br></br>
                    <label className='text-white'>Message:&emsp;</label>
                    <input name="salary" type="text" required value={Message} onChange= {(e)=>setMessage(e.target.value)}/>
                    <br></br>
                    {!isPending &&<button class="btn">Add Review</button>}
                    {isPending &&<button disabled>Stand By..</button>}
                </form>
                <br></br>
                
            </div>
        </div>
    );
}
export default CreateReview;