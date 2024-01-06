import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './ReviewList.css'

const ReviewDetails=()=>{
    const {id}= useParams();
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

    const{data:Review, error, isPending}= useFetch("http://localhost:8000/Review/"+id);
    const navigate =useNavigate();
    const handleClick=()=>{
        fetch("http://localhost:8000/Review/"+Review.id,{
            method:"DELETE"
        }).then(()=>{
            navigate('/');
        })

        
    }
    const title="welcome to aapp";
    const description="fwewfwwewwfwfwewefwwf"
    return(
        <div className="content">
            
            <br></br>
            <div className="Review-details">
               {isPending&& <div align='center'>Loading.....</div>}
                {error && <div>{error}</div>}
                {Review&& (
                    // <div align='center'>
                    //     <h2>{Review.Name}</h2>
                    //     <p>{Review.Rating}</p>
                    //     <p>{Review.Title}</p>
                    //     <p>{Review.Message}</p>
                    //     <br></br>
                    //     <button onClick={handleClick}>Delete Message</button>
                    // </div>
                    //////////////////////////////////////
                    <div  id="lahtList"className="Review-preview" key={Review.id}>
                        
                            <div class="">
                                <div class="media-comment">
                                    
                                    <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                    <div class="g-mb-15">
                                    <h2 class='viewN'>{Review.Name}</h2>
                                      
                                    </div>
                                    <div class='viewR'>
                                    {displayStars(Review.Rating)}
                                    </div>
                                    <p>Rating: {Review.Rating} out of 5</p>
                                    <br></br>
                                    <h3>{Review.Title}</h3>
                                    <p>{Review.Message}</p>
                                    <br />
                                    <ul class="list-inline d-sm-flex my-0">
                                        <li class="list-inline-item ml-auto">
                                        <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                                        <button class="btn1" onClick={handleClick}>Delete Message</button>
                                        
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        
                        </div> 
                    ////////////////////////////////////
                )
                }
            </div>

        </div>
    );
}
export default ReviewDetails;