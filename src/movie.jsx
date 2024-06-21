import axios from "axios";
import React,{useState} from "react";
import { useParams } from "react-router-dom";
import movies from "./app.jsx"
 
function Movie1 () {
    const [username,setname]=useState("")
    const [rev,setreview]=useState("")
    const [rating,setrating]=useState()
    const [reply, setReply] = useState("")
    const [reviewarr,setarr]=useState([])
    
    const {id}=useParams();

    const movie=movies.find(movie=>(movie.id)===id)
    
    const fetchreviews = () => {
      axios
        .get(`http://localhost:3000/api/movie/${id}/review`)
        .then((response) => {
          setarr(response.data);
        })
        .catch((error) => {
          setReply("Error fetching bookings");
        });
    };
  
    useEffect(() => {
      fetchreviews();
    }, []);
  
    const submit = () => {
        const revdetails = { username, rating, rev };
        axios
          .post(`http://localhost:3000/api/movie/${id}/review`, revdetails)
          .then((response) => {
            setReply(response.data.message);
            setname("");
            setrev("");
            setrating();
          })
          .catch((error) => {
            setReply("Error posting review");
          });
      };
      const editrev=(uid)=>{
        axios
        .put(`http://localhost:3000/api/movie/${id}/review/${uid}`)
        
        .then((reponse)=>{
            setReply(reponse.data.message)
          })
          .catch((error)=>{
            setReply("Error in editing")
          })
      }
      const clear =()=>{
        setname("");
        setrev("");
        setrating();
      }
      const delrev=( uid)=>{
        axios
          .delete(`http://localhost:3000/api/movie/${id}/review/${uid}`)
          .then((reponse)=>{
            setReply(reponse.data.message)
          })
          .catch((error)=>{
            setReply("Error in deleting")
          })
      }
    return (
       <>
       <div>
        <div>
          {movie.name}--{movie.genre}--{movie.duration}
        </div>
        <ul>{reviewarr.map((review)=>(
        <li key={review.uid}>{review.username}:{review.rating} -- {review.rev}
        <button onClick={()=>delrev(review.uid)}>Delete</button><button onClick={()=>editrev(review.uid)}>Edit</button>
        </li>
        ))}
        <div uid="edit">
        <input type ="text" value={rev} onChange={(e) => setreview(e.target.value)}/>
        <button onClick={submit}>Submit</button>
        </div>
        </ul>
        <input type="text" placeholder="username" value={username} onChange={(e) => setname(e.target.value)}/>
        <input type="number" placeholder="rating" value={rating} onChange={(e) => setrating(e.target.value)}/>
        <input type="text" placeholder="username" value={rev} onChange={(e) => setreview(e.target.value)}/>
        <button onClick={submit}>Submit</button><button onClick={clear}>Clear</button>
      </div>
       </>
    );
};
 
export default Movie1;