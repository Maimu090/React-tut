import React from "react";
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import IconsComponenet from "./components/IconsComponenet";


const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 100));
  return (
    <button onClick={(handleClick) => 
      console.log('Button clicked')
    }>Click Me</button>
  )
}

const App = () => {
 return (
  <div>
    <StyleCard/>
    <ProfileCard/>
    <IconsComponenet/>
    <Button/>

  </div>
 )
}

export default App;
