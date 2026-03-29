import type { repo } from "../types/Repository"
import RepoCard from "./RepoCard"
type Props = {
  repo: repo[]
  repoLoading: boolean
}
function RepoList(props: Props) {
  const { repo, repoLoading } = props
  
  if (repoLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="minimal-card h-32 animate-pulse bg-slate-50 border-slate-100"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-6 pb-20">
      {repo.map((element) => (
        <RepoCard key={element.id} repo={element} />
      ))}
      
      {repo.length === 0 && !repoLoading && (
        <div className="col-span-full py-20 text-center space-y-2">
          <p className="text-slate-400 text-lg">No repositories found.</p>
        </div>
      )}
    </div>
  )
}

export default RepoList
