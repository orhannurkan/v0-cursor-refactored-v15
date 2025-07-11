async function fetchAllFilesFromDevelop() {
  console.log("🔄 Fetching all files from develop branch...")

  const owner = "orhannurkan"
  const repo = "v0-cursor-refactored-v15"
  const branch = "develop"

  try {
    // Repository tree'sini çek
    const treeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`)
    const treeData = await treeResponse.json()

    if (treeData.tree) {
      console.log(`📁 Found ${treeData.tree.length} files in develop branch:`)

      // Sadece dosyaları listele (klasörleri değil)
      const files = treeData.tree.filter((item) => item.type === "blob")

      console.log("\n📄 Files to sync:")
      files.forEach((file, index) => {
        console.log(`${index + 1}. ${file.path}`)
      })

      // Ana dosyaları çek
      const importantFiles = [
        "app/page.tsx",
        "app/layout.tsx",
        "app/globals.css",
        "README.md",
        "package.json",
        "tailwind.config.ts",
        "next.config.mjs",
      ]

      console.log("\n🔄 Fetching important files...")

      for (const filePath of importantFiles) {
        const fileExists = files.find((f) => f.path === filePath)
        if (fileExists) {
          try {
            const fileResponse = await fetch(
              `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`,
            )
            const fileData = await fileResponse.json()

            if (fileData.content) {
              const content = atob(fileData.content)
              console.log(`✅ ${filePath} - ${content.length} characters`)

              // İlk 200 karakteri göster
              console.log(`   Preview: ${content.substring(0, 200)}...`)
              console.log("")
            }
          } catch (error) {
            console.log(`❌ Error fetching ${filePath}: ${error.message}`)
          }
        }
      }
    } else {
      console.log("❌ Could not fetch repository tree")
    }
  } catch (error) {
    console.error("❌ Error:", error.message)
  }
}

fetchAllFilesFromDevelop()
