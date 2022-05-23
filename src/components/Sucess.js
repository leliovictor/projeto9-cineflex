import { useLocation } from "react-router-dom";

export default function Sucess() {

  const location = useLocation();

  console.log(location.state);

  return <h1>{location.state.person}</h1>;
}
