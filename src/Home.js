import '../src/Home.css'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import pic1 from './pics/pic1.jpg'
import pic2 from './pics/pic2.jpg'
import pic3 from './pics/pic3.jpg'
const Home=()=>{
    return(
        <div>
        <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src={pic1} className='d-block w-100' alt='.pic2' id='pic'/>
          <MDBCarouselCaption >
                <h1>Welcome to my Portfolio page </h1>
                <p>Here you can explore my Educational Background and Basic Personal Information</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
  
        <MDBCarouselItem itemId={2}>
          <img src={pic2} className='d-block w-100' alt='.pic2' id='pic'/>
          <MDBCarouselCaption>
                <h1>Educational Background </h1>
                <p>You will be able to see my updated Educational Background</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
  
        <MDBCarouselItem itemId={3}>
          <img src={pic3} className='d-block w-100' alt='.pic3' id='pic'/>
          <MDBCarouselCaption >
            <h1>Basic Personal Information</h1>
            <p>Here you will be able to see my Name, Birtdate, Address etc..</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
      <br></br>
      <br></br>
      <br></br>
      <div id='Education'>
      <div>
        <h1>Educational Background</h1>
      </div>
      <br></br>
      <div class="container p-4">
        <div class="row">
        
            <div id='e1' class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h3>Elementary Education</h3>
                <h4>Loakan Elementary School</h4>
                <p>Graduated at 2009</p>
            </div>
            
            <div id='e2' class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h3>Junior high school</h3>
                <h4>Mil-An National HighSchool</h4>
                <p>Graduated at 2019</p>
            </div>
        
        </div>
        <br></br>
        <br></br>
        <div class="row">
        
            <div id='e3'class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h3>Senior high school</h3>
                <h4>Mil-An National HighSchool</h4>
                <p>Graduated at 2021</p>
            </div>
            
            <div id='e4' class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h3>Tertiary Level Education</h3>
                <h4>University of Baguio</h4>
                <p>In 3rd Year</p>
            </div>
        
        </div>
    
      </div>  
      <br></br>
      <br></br>
      </div> 
      <div id='Education'>
      <div>
        <h1>Basic Personal Information</h1>
      </div>
      <div class='TableLahat'>
      <table>
            <tr>
                <th><h4>Name:</h4></th>
                <td>Motal,Kim Jay S.</td>
            </tr>
            
            
      </table>
      <table>
            <tr>
                <td><h4>Age:</h4></td>
                <td>20</td>
            </tr>
      </table>
      <table>
            <tr>
                <td><h4>Address:</h4></td>
                <td>#025, Loakan Proper, Poruk Sadjo, Baguio City</td>
            </tr>
      </table>
      <table>
            <tr>
                <td><h4>Likes and Dislikes:</h4></td>
                <td>Likes Money, Dislikes Working</td>
            </tr>
      </table>
      <table>
            <tr>
                <td><h4>Hobbies:</h4></td>
                <td>Pencil Drawing</td>
            </tr>
      </table>
      <table>
            <tr>
                <td><h4>Personal Motto:</h4></td>
                <td>Time is Gold</td>
            </tr>
      </table>
      <table>
            <tr>
                <td><h4>Skills:</h4></td>
                <td>Java</td>
                <td>Css</td>
                <td>JavaScript</td>
            </tr>
            <tr>
                <td></td>
                <td>Phython</td>
                <td>Php</td>
                <td>React</td>
            </tr>
            <tr>
                <td></td>
                <td>Html</td>
                <td>Laravel</td>
                <td>React Native Expo</td>
            </tr>
      </table>
      </div>
      </div>    
      </div>
     );
};
export default Home;