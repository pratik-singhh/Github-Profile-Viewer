import type { repo } from "../types/Repository"
import RepoCard from "./RepoCard"
type Props = {
  repo: repo[]
  repoLoading: boolean
}
function RepoList(props: Props) {
  const { repo, repoLoading } = props
  return (
    <div>

      {(repoLoading) &&

        <h1> Repositories Loading...</h1>
      }

      {(!repoLoading) && repo.map((element) => (
        <RepoCard key={element.id} repo={element!} />

      ))}

    </div>


  )
}

export default RepoList
