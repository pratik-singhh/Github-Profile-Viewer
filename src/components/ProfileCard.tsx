import type { user } from "../types/User"
type Props = {
  user: user
}

function ProfileCard(props: Props) {
  const { user } = props;
  return (
    <div>
      {(user) &&
        <div className="m-5 border-2 rounded-lg bg-blue-200 flex flex-col p-3 max-w-xs">

          <img src={user?.avatar_url} alt="user avatar" className="max-w-32 rounded-full " />

          <a rel="noopener noreferrer" href={user.html_url} className="text-2xl hover:underline my-4">{user?.name}</a>
          <p className="text-lg">{user?.bio || "No Bio Available"}</p>
          <span className="flex gap-4">
            <p>Followers : {user.followers}</p>
            |
            <p>Following : {user.following}</p>
          </span>
        </div>
      }
    </div>
  )
}

export default ProfileCard
