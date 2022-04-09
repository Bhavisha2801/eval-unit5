import React from 'react'

export const Home = () => {

  const [title , setTitle] = React.useState({
    name : "MASAI School",
    email : "hello@masai.com",
    username : "masai-school",
    mobile : "9876543210",
    description : "A Transformation in education!"
  })


  // const handleAdd = () => {
  //   fetch('https://masai-api-mocker.herokuapp.com/user/masai-school')
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  // }

  

  return (
    <div>
      
      <div>
      {
       <h1>{title.name}<br />
       {title.email}<br />
       {title.username}<br />
       {title.mobile}<br />
            {title.description}
       </h1>
      }
      </div>
      

    </div>
  )
}
