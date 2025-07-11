async function simulateGitPull() {
  try {
    console.log("Fetching changes from origin/develop...")

    // GitHub API'den develop branch'indeki son değişiklikleri çek
    const response = await fetch("https://api.github.com/repos/your-username/v0-cursor-refactored-v15/commits/develop")
    const commits = await response.json()

    console.log("Latest commits from develop:")
    commits.slice(0, 5).forEach((commit) => {
      console.log(`- ${commit.sha.substring(0, 7)}: ${commit.commit.message}`)
    })

    return commits
  } catch (error) {
    console.error("Error fetching changes:", error)
  }
}

// Scripti çalıştır
simulateGitPull()
