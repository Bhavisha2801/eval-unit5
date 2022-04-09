import React from "react"
import { useDispatch , useSelector } from "react-redux";
import { showData } from "../Redux/action";

export const Employee = () =>{

  const [data , setData] = React.useState("")
  
  const dispatch = useDispatch()
  // const emp = useSelector( (state) => state.emp )

  const getData = () => {
    fetch('http://localhost:3001/todos').then((res) => res.json())
    .then((res) => dispatch(showData(res)))
  }

  React.useEffect(() => {
    getData()
  } , [])

  const handleLoad = () => {

      const payload = {
        data,
        status: false
      }

      fetch('http://localhost:3001/emp', {
        method : "POST",
        body : JSON.stringify(payload),
        headers:{
          "Content-Type" : "application/json"
        }
      }).then((res) => getData())

  }
  return (
    <div className="App" onClick={handleLoad}>
      
      

      {/* <button onClick={handleLoad} >ADD</button> */}

    {/* {
      emp.map((item) => (
        <div key={item.id}>
          {item.title} - {item.status ? "Completed" : "Not Completed" }
        </div>
      ))
    } */}

    </div>
  );
}

