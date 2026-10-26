import { useContext } from "react";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { name } = useContext(UserContext);

  return <h2>Welcome, {name}</h2>;
};

export default Navbar;