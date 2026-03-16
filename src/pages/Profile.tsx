import { Link, useParams } from "react-router-dom";

function Profile() {
  let { userName } = useParams();
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
