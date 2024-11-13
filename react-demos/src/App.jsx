import React from "react";

const App = () => {
  return (
    <User
      name="Maimunah"
      age={25}
      isMarried={true}
      hobbies={["reading", "coding", "traveling"]}
      img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    />
  );
};

const User = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.img} alt="profile" width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Is Married: {props.isMarried ? "Yes" : "No"}</h2>
      <h2>Hobbies:{props.hobbies}</h2>
    </div>
  );
};

export default App;
