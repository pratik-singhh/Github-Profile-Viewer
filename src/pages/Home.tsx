import { useNavigate } from "react-router-dom"
import { useState } from "react";
function Home() {
  const [query, setQuery] = useState<string>("");
  const navigation = useNavigate();

  const querySearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim() !== "")
      navigation(`/profile/${query}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="max-w-xl w-full space-y-12 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            GitProfile
          </h1>
          <p className="text-slate-500 text-lg">
            A minimalist way to explore GitHub.
          </p>
        </div>

        <div className="space-y-6">
          <form onSubmit={querySearch} className="flex flex-col sm:flex-row gap-3">
            <input 
              placeholder="Username" 
              className="input-minimal flex-1 text-lg" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} 
              value={query} 
              autoFocus
            />
            <button 
              type="submit"
              className="btn-minimal text-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
