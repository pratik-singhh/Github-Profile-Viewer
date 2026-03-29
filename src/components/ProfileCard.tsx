import type { user } from "../types/User"
type Props = {
  user: user
}

function ProfileCard(props: Props) {
  const { user } = props;
  if (!user) return null;

  return (
    <div className="minimal-card flex flex-col md:flex-row items-center md:items-start gap-8 max-w-3xl mx-auto my-8 border-slate-200 shadow-none">
      <img 
        src={user.avatar_url} 
        alt={user.name || user.login} 
        className="w-32 h-32 md:w-40 md:h-40 rounded-xl border border-slate-200 object-cover"
      />

      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <div className="space-y-1">
          <h1 className="text-3xl text-slate-900 font-bold">{user.name || user.login}</h1>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-slate-900 transition-colors text-lg"
          >
            @{user.login}
          </a>
        </div>

        <p className="text-slate-600 text-base max-w-xl">
          {user.bio || "No bio available."}
        </p>

        <div className="flex items-center gap-6 pt-2">
          <div className="flex flex-col">
            <span className="text-slate-900 font-bold text-lg">{user.followers}</span>
            <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-bold text-lg">{user.following}</span>
            <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Following</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-bold text-lg">{user.public_repos}</span>
            <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Repos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
