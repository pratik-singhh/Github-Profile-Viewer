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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <nav className="border-b border-slate-100 px-6 py-4 mb-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-display font-bold text-slate-900">
            GitProfile
          </Link>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            explorer / {userName}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <ProfileCard user={user!} />

        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900">Repositories</h2>
          </div>

          <RepoList repo={repo!} repoLoading={repoLoading} />

          {/* Simple Pagination */}
          {!repoLoading && repo.length > 0 && (
            <div className="flex justify-center items-center gap-12 py-12">
              <button 
                disabled={page === 1} 
                onClick={() => {
                  setPage((p) => p - 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="text-sm font-bold text-slate-900 hover:text-slate-500 disabled:opacity-30 flex items-center gap-2 transition-colors"
              >
                ← Prev
              </button>
              
              <span className="text-slate-300 font-medium text-xs">
                {page}
              </span>

              <button 
                disabled={repo.length < 10} 
                onClick={() => {
                  setPage((p) => p + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="text-sm font-bold text-slate-900 hover:text-slate-500 disabled:opacity-30 flex items-center gap-2 transition-colors"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
