import { getRepositories, getUser } from "../services/GithubApi";
import type { user } from "../types/User";
import type { repo } from "../types/Repository";
import { useEffect, useState } from "react"

function useGithubProfile(userName: string) {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState<user>();

  const [repo, setRepo] = useState<repo[]>([]);

  const [repoLoading, setRepoLoading] = useState(true);

  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setUserLoading(true);
      setRepoLoading(true);
      const [userData, repoData] = await Promise.all([
        getUser(userName),
        getRepositories(userName, page)
      ])
      setUser(userData);
      setRepo(repoData);
      setRepoLoading(false);
      setUserLoading(false);

    }
    fetchData();

  }, [userName, page])

  return ({ user, repo, userLoading, repoLoading, page, setPage })

}
export default useGithubProfile
