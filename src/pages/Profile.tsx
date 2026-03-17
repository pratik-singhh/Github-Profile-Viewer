import { Link, useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import useGithubProfile from "../hooks/useGithubProfile";
import RepoList from "../components/RepoList";

function Profile() {
  let { userName } = useParams();
  const userData = useGithubProfile(userName!);
  const { user, repo, userLoading, repoLoading, page, setPage } = userData;


  if (userLoading) {
    return (

      <h1>User Loading...</h1>
    )
  }

  return (
    <div>

      <Link to="/" className="m-5 text-blue-400" >
        Home⇱
      </Link>

      <ProfileCard user={user!} />

      <h2 className="text-lg m-5 font-bold"> Repositories : </h2> <br />

      <RepoList repo={repo!} repoLoading={repoLoading} />

      <div className="flex justify-center gap-5 ">

        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="cursor-pointer border-2 bg-green-200 p-2">
          Prev
        </button>
        <button disabled={repo.length < 10} onClick={() => setPage((p) => p + 1)} className="border-2 bg-green-200 cursor-pointer p-2">
          Next
        </button>
      </div>

    </div>
  )
}

export default Profile
