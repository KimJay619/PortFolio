import { useState } from 'react';

const CreateReview =()=>{
    const[Name, setName] =useState('');
    const[Rating, setRating] =useState('');
    const[Title, setTitle] =useState('');
    const[Message, setMessage] =useState('');
    const[isPending, setisPending] =useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const Review ={Name, Rating, Title, Message}
        console.log(Review)
        setisPending(true);
        fetch ('http://localhost:8000/Review',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(Review)
        }).then(()=>{console.log("Review is Posted");});
        setisPending(false)
    }
    const title ="Welcome to Review Page"
    const description ="You can Leave a Review in here if you have message to deliver "
    return(
        <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
            <hr></hr>
            <br></br>
            <div className="create">
                <h2>Adding new Review</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" required value ={Name} onChange= {(e)=>setName(e.target.value)}/>
                    <br></br>
                    <label>Rating:</label>
                    <input name="position" type="number" min="0" max="10" size="40" placeholder="Maximum rating are 10"required value ={Rating} onChange= {(e)=>setRating(e.target.value)}/>
                    <br></br>
                    <label>Title:</label>
                    <input name="department" type="text" required value ={Title} onChange= {(e)=>setTitle(e.target.value)}/>
                    <br></br>
                    <label>Message:</label>
                    <input name="salary" type="text" required value={Message} onChange= {(e)=>setMessage(e.target.value)}/>
                    <br></br>
                    {!isPending &&<button>Add Review</button>}
                    {isPending &&<button disabled>Stand By..</button>}
                </form>
                <br></br>
                
            </div>
        </div>
    );
}
export default CreateReview;