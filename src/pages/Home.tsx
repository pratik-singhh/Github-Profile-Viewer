import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Profile";
type Props = {
}
function Home(props: Props) {
  return (

    <div>

      <h1 className="flex justify-center m-4 text-2xl">Github Profile Viewer</h1>
      <div className="flex justify-center " >
        <input className="border-2 max-w-xs" />

      </div>

    </div>
  )
}

export default Home
