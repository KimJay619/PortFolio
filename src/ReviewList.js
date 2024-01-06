import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import './ReviewList.css'

const ReviewList = ({ Review, Reviewlist }) => {
    // Function to generate stars based on the given rating
        const displayStars = (rating) => {
            const totalStars = 5;
            const fullStars = Math.floor(rating);
            const remainder = rating - fullStars;
            const starArray = [];

            for (let i = 0; i < fullStars; i++) {
                starArray.push(<span key={i}>&#9733;</span>);
            }

            if (remainder > 0) {
                starArray.push(<span key={starArray.length}>&#9733;({remainder * 100}%)</span>);
            }

            for (let i = starArray.length; i < totalStars; i++) {
                starArray.push(<span key={i}>&#9734;</span>);
            }

            return starArray;
        };

    return (
        <div class='Review-list' className="Review-list">
            <h2 id="Reviewlot">{Reviewlist}</h2>
            <br></br>
            {Review.map((s) => (
            //     <div className="Review-preview" key={s.id}>

            //         <h2>{s.Name}</h2>
            //         {/* Display the rating using the react-simple-star-rating component */}
            //         <div>
            //             {displayStars(s.Rating)}
            //         </div>
            //         <p>Rating: {s.Rating} out of 5</p>
            //         <br />
            //         <Link to={`/Review/${s.id}`}>{s.Name}</Link>
            //         <br></br>
            //         <br></br>
            //     </div>
            // ))}
            <div  id="lahtList"className="Review-preview" key={s.id}>
            
                <div class="">
                    <div class="media-comment">
                        
                        <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                        <div class="g-mb-15">
                        <h2 class='viewN'>{s.Name}</h2>
                            
                        </div>
                        <div class='viewR'>
                         {displayStars(s.Rating)}
                        </div>
                         <p>Rating: {s.Rating} out of 5</p>
                         <br />
                        <ul class="list-inline d-sm-flex my-0">
                            
                            <li class="list-inline-item ml-auto">   
                            <Link to={`/Review/${s.id}`}>
                            <button class="btn1">Detail</button>  
                             </Link>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                </div>
            
            </div> 
            ))}
        </div>
        
    );
}

export default ReviewList;