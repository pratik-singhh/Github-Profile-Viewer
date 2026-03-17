import type { repo } from "../types/Repository"
type Props = {
  repo: repo
}
function RepoCard(props: Props) {
  const { repo } = props;
  return (
    <div className="flex flex-col max-w-xl bg-fuchsia-200 border-2 justify-center gap-3 m-5 p-3 rounded-lg">
      <p>{repo.name}</p>
      <p>{repo.description || "No Description"}</p>
      <p>{repo.stargazers_count}🌟</p>
      <p>{repo.language}</p>
      <a rel="noopener noreferrer" href={repo.html_url} className="max-w-fit text-emerald-500 hover:underline" target="_blank">Link🔗</a>

    </div>
  )
}

export default RepoCard
