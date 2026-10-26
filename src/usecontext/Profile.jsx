import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { name, setName } = useState("Nutan");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default Profile;