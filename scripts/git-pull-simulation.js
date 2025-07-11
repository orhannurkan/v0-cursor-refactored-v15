async function simulateGitPull() {
  console.log("Fetching changes from origin/develop...")

  try {
    // GitHub API'den develop branch'indeki son commit'leri çek
    const response = await fetch(
      "https://api.github.com/repos/orhannurkan/v0-cursor-refactored-v15/commits?sha=develop&per_page=5",
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const commits = await response.json()

    // Commit'leri kontrol et
    if (Array.isArray(commits) && commits.length > 0) {
      console.log("\n📋 Recent commits on develop branch:")
      commits.forEach((commit, index) => {
        const date = new Date(commit.commit.author.date).toLocaleDateString()
        console.log(`${index + 1}. ${commit.commit.message} (${date})`)
        console.log(`   Author: ${commit.commit.author.name}`)
        console.log(`   SHA: ${commit.sha.substring(0, 7)}`)
        console.log("")
      })

      // Son commit'in detaylarını al
      const latestCommit = commits[0]
      const commitResponse = await fetch(
        `https://api.github.com/repos/orhannurkan/v0-cursor-refactored-v15/commits/${latestCommit.sha}`,
      )

      if (commitResponse.ok) {
        const commitDetails = await commitResponse.json()
        console.log("📝 Files changed in latest commit:")

        if (commitDetails.files && commitDetails.files.length > 0) {
          commitDetails.files.forEach((file) => {
            console.log(`   ${file.status}: ${file.filename}`)
            console.log(`   +${file.additions} -${file.deletions}`)
          })
        }
      }

      console.log("\n🔄 Manual sync suggestion:")
      console.log("1. Go to: https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop")
      console.log("2. Check recent commits")
      console.log("3. Copy changed files to v0")
    } else {
      console.log("No commits found or branch is up to date")
    }
  } catch (error) {
    console.error("Error fetching changes:", error.message)
    console.log("\n🔄 Manual sync suggestion:")
    console.log("1. Go to: https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop")
    console.log("2. Check recent commits")
    console.log("3. Copy changed files to v0")
  }
}

// Script'i çalıştır
simulateGitPull()
