import { useState } from "react";

interface UserProfileState {
  name: string;
  email: string;
  age: number;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };

const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };

  const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: parseInt(age) }));
  };


  return (
    <div>
      <h2>User Profile</h2>

      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />

      <input type="email" placeholder="Email" value={profile.email}
      onChange={e => updateEmail(e.target.value)} />
      
      <h1>Profile Summary</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age}</p>




      <input
        type="number"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
    </div>
  );
};

export default UserProfile;
