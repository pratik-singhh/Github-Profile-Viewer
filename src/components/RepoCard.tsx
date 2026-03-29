import type { repo } from "../types/Repository"
type Props = {
  repo: repo
}
function RepoCard(props: Props) {
  const { repo } = props;
  
  const languageColor: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Rust: "#dea584",
    Go: "#00ADD8",
  };

  return (
    <div className="minimal-card minimal-hover flex flex-col justify-between h-full space-y-4">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg text-slate-900 font-bold truncate">
            {repo.name}
          </h3>
          <span className="tag shrink-0">
            {repo.visibility || "Public"}
          </span>
        </div>
        
        <p className="text-slate-500 text-sm line-clamp-2">
          {repo.description || "No description."}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: languageColor[repo.language] || "#cbd5e1" }}
              ></span>
              <span>{repo.language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>{repo.stargazers_count}</span>
          </div>
        </div>

        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-bold text-slate-900 hover:text-slate-600 transition-colors"
        >
          View ↗
        </a>
      </div>
    </div>
  )
}

export default RepoCard
