
# 🚀 GitHub Profile Viewer

A modern GitHub Profile Viewer built with React and TypeScript that allows users to search for any GitHub username and explore their profile and repositories.

---

## 🌐 Live Demo

🔗 https://your-vercel-link.vercel.app

---

## ✨ Features

* 🔍 Search GitHub users by username
* 👤 View user profile (avatar, bio, followers, following)
* 📦 Browse repositories
* ⭐ See stars and primary language
* 🔗 Direct link to GitHub repositories
* 📄 Pagination for repositories
* ⚡ Parallel API fetching for better performance
* ⏳ Loading states for smooth UX

---

## 🛠️ Tech Stack

* ⚛️ React
* 📘 TypeScript
* ⚡ Vite
* 🎨 Tailwind CSS
* 🌐 GitHub REST API

---

## 🧠 What I Learned

* Building reusable components (`ProfileCard`, `RepoCard`, `RepoList`)
* Creating custom hooks for data fetching
* Handling multiple API calls in parallel
* Managing loading states effectively
* Structuring a scalable React application
* Working with real-world APIs

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ProfileCard.tsx
│   ├── RepoCard.tsx
│   └── RepoList.tsx
├── hooks/
│   └── useGithubProfile.ts
├── services/
│   └── GithubApi.ts
├── types/
│   ├── User.ts
│   └── Repository.ts
├── pages/
│   └── Profile.tsx
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/github-profile-viewer.git
cd github-profile-viewer
npm install
npm run dev
```

---

## 🚀 Future Improvements

* 🔃 Sort repositories (stars, updated)
* 🧪 Add error handling UI
* 📱 Improve mobile responsiveness
* 🌈 Enhance UI/UX with animations
* 🔍 Add search suggestions

---

## 🤝 Contributing

Feel free to fork this repo and improve it!

---

## 📜 License

This project is open source and available under the MIT License.

---

## 🙌 Acknowledgements

* GitHub REST API
* Open source community

---
