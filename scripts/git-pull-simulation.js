async function simulateGitPull() {
  console.log("Fetching changes from origin/develop...")

  try {
    // GitHub API'den develop branch'indeki son commit'leri çek
    const response = await fetch(
      "https://api.github.com/repos/orhannurkan/v0-cursor-refactored-v15/commits?sha=develop&per_page=5",
    )
    const commits = await response.json()

    if (!Array.isArray(commits)) {
      console.log("⚠️ No commits found or API limit reached")
      console.log("🔄 Manual sync suggestion:")
      console.log("1. Go to: https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop")
      console.log("2. Check recent commits")
      console.log("3. Copy changed files to v0")
      return
    }

    console.log(`📦 Found ${commits.length} recent commits:`)

    commits.forEach((commit, index) => {
      const date = new Date(commit.commit.author.date).toLocaleDateString()
      console.log(`${index + 1}. ${commit.sha.substring(0, 7)} - ${commit.commit.message} (${date})`)
    })

    // Son commit'in detaylarını al
    if (commits.length > 0) {
      const latestCommit = commits[0]
      const commitDetailResponse = await fetch(
        `https://api.github.com/repos/orhannurkan/v0-cursor-refactored-v15/commits/${latestCommit.sha}`,
      )
      const commitDetail = await commitDetailResponse.json()

      if (commitDetail.files) {
        console.log("\n📝 Changed files in latest commit:")
        commitDetail.files.forEach((file) => {
          console.log(`   ${file.status}: ${file.filename}`)
        })
      }
    }

    console.log("\n🔄 Manual sync suggestion:")
    console.log("1. Go to: https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop")
    console.log("2. Check recent commits")
    console.log("3. Copy changed files to v0")
  } catch (error) {
    console.log("⚠️ Error fetching changes:", error.message)
    console.log("🔄 Manual sync suggestion:")
    console.log("1. Go to: https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop")
    console.log("2. Check recent commits")
    console.log("3. Copy changed files to v0")
  }
}

// Script'i çalıştır
simulateGitPull()
