import { Link, useParams } from "react-router-dom";
import { getUser } from "../services/GithubApi";

function Profile() {
  let { userName } = useParams();
  const userData = getUser(userName);
  console.log(userData);


  return (
    <div>

      <Link to="/" className="text-blue-400" >
        click me to go to Home page
      </Link>
      <h1>Your are {userName}</h1>

    </div>
  )
}

export default Profile
