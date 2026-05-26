import { useState } from "react";
import Comments from "./Comment";
function Form() {
  let [values, setValues] = useState({
    username: "",
    remark: "",
    rating: ""
  });
  let [comments, setComments] = useState([]);

  let handleChange = (event) => {
    event.preventDefault();
    setValues((prevVal) => {
      return { ...prevVal, [event.target.name]: event.target.value }
    });
  }
  let handleSubmit = () => {
    event.preventDefault();
    console.log(values);
    setComments((prevVal)=>{
      return [...prevVal, values]
    });
    console.log(comments);
    setValues({
      username: "",
      remark: "",
      rating: ""
    })
  }

  return <>
  <Comments array={comments} />
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" value={values.username} onChange={handleChange} />
      <br />
      <br />
      <br />
      <label htmlFor="remark">Remark</label>
      <textarea name="remark" id="remark" onChange={handleChange} value={values.remark}></textarea>
      <br />
      <br />
      <br />
      <label htmlFor="rating">Rating</label>
      <input type="number" name="rating" value={values.rating} onChange={handleChange} min="1" max="5" />
      <br />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  </>
}
export default Form;