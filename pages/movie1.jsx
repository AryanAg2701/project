import axios from "axios";
import React,{useState} from "react";
 
function Movie1 () {
    const [username,setname]=useState("")
    const [rev,setreview]=useState("")
    const [rating,setrating]=useState()
    const [reply, setReply] = useState("")
    const [reviewarr,setarr]=useState([{
        username:"kapil",
        rating:4,
        rev:"Good Movie!!",
    }])
    const submit = () => {
        const revdetails = { username, rating, rev };
        axios
          .post("http://localhost:3000/api/review1", revdetails)
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
      const editrev=(id)=>{
        axios
        .put(`http://localhost:3000/api/review1/${id}`)
        
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
      const delrev=(id)=>{
        axios
          .delete(`http://localhost:3000/api/review1/${id}`)
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
        <ul>{reviewarr.map((review)=>(
        <li key={review.id}>{review.username}:{review.rating} -- {review.rev}
        <button onClick={()=>delrev(review.id)}>Delete</button><button onClick={()=>editrev(review.id)}>Edit</button>
        </li>
        ))}
        <div id="edit">
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