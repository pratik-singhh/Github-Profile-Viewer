import type { repo } from "../types/Repository";
import type { user } from "../types/User";
export async function getUser(userQuery: string) {
  const response = await fetch(`https://api.github.com/users/${userQuery}`)
  const data: user = await response.json();

  return data;
}
export async function getRepositories(userQuery: string, page: number) {

  const response = await fetch(`https://api.github.com/users/${userQuery}/repos?page=${page}&per_page=10&sort=updated`)
  const data: repo[] = await response.json();
  return data;
}

