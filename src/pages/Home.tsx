import { Link, useNavigate } from "react-router-dom"
import Profile from "./Profile";
import { useState } from "react";
type Props = {
}
function Home(props: Props) {
  const [query, setQuery] = useState<string>("");

  const navigation = useNavigate();

  const queryChanger = (term: string) => setQuery(term);

  const querySearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim() !== "")
      navigation(`/profile/${query}`);
  }
  console.log(query);



  return (
    <div>

      <h1 className="flex justify-center m-4 text-2xl">Github Profile Viewer</h1>
      <div className="flex justify-center gap-4" >
        <form onSubmit={querySearch} >

          <input placeholder="Enter Profile Name" className="border-2 mr-4 max-w-xs p-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            queryChanger(e.target.value);
          }} value={query} />
          <button onClick={querySearch} className="cursor-pointer ml-4 border-2 p-2 bg-blue-100">Search</button>
        </form>

      </div>

    </div>
  )
}

export default Home
