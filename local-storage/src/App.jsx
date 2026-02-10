import React from "react";

const App = () => {
  localStorage.setItem("user", "Harshita"); //set item in local storage
  localStorage.setItem("age", "22");
  const user = localStorage.getItem("user"); //get item from the local storage
  const age = localStorage.getItem("age");
  console.log(user);
  console.log(age);
  localStorage.removeItem("user"); //can remove item from local storage

  const user1={
    username:'Sarthak',
    age:18,
    city:'Bhopal'
  }

  localStorage.setItem('user1',JSON.stringify(user1)) //jab bhi local storage pr key value bejhte hain toh vo string form mein bejhni hoti hai json strigify method convert object to string form
   
  const user2=localStorage.getItem('user1')
  console.log(user2)// u will get data in string 
  
  const user3=JSON.parse(user2)//it will retrieve json file from string
  console.log(user3)



  return <div>App</div>;
};

export default App;
  