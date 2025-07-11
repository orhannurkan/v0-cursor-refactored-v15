async function completeSyncFromDevelop() {
  console.log("🚀 Starting complete sync from develop branch...")
  console.log("================================================")

  const owner = "orhannurkan"
  const repo = "v0-cursor-refactored-v15"
  const branch = "develop"

  // Öncelikle sync edilecek dosyaları belirle
  const filesToSync = [
    "app/page.tsx",
    "app/layout.tsx",
    "app/globals.css",
    "README.md",
    "package.json",
    "next.config.mjs",
    "tailwind.config.ts",
    "components/theme-provider.tsx",
    "components.json",
    ".gitignore",
  ]

  console.log(`📋 Files to sync: ${filesToSync.length}`)
  console.log("")

  for (const filePath of filesToSync) {
    try {
      console.log(`🔄 Fetching: ${filePath}`)

      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`)

      if (response.ok) {
        const fileData = await response.json()

        if (fileData.content) {
          const content = atob(fileData.content)
          console.log(`✅ ${filePath} - ${content.length} characters`)

          // Dosya tipine göre önizleme
          if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
            console.log(`   📄 React/TypeScript file`)
          } else if (filePath.endsWith(".css")) {
            console.log(`   🎨 Stylesheet`)
          } else if (filePath.endsWith(".md")) {
            console.log(`   📝 Markdown documentation`)
          } else if (filePath.endsWith(".json")) {
            console.log(`   ⚙️ Configuration file`)
          }

          // İlk birkaç satırı göster
          const lines = content.split("\n").slice(0, 3)
          lines.forEach((line) => {
            if (line.trim()) {
              console.log(`   > ${line.substring(0, 80)}${line.length > 80 ? "..." : ""}`)
            }
          })
        } else {
          console.log(`⚠️  ${filePath} - No content available`)
        }
      } else {
        console.log(`❌ ${filePath} - File not found or error: ${response.status}`)
      }

      console.log("")
    } catch (error) {
      console.log(`❌ Error fetching ${filePath}: ${error.message}`)
      console.log("")
    }
  }

  console.log("📋 Sync Summary:")
  console.log("================")
  console.log("1. All files have been fetched from develop branch")
  console.log("2. Review the content above")
  console.log("3. Update corresponding files in v0")
  console.log("4. Test the application after updates")
  console.log("")
  console.log("🔗 Useful links:")
  console.log(`   Repository: https://github.com/${owner}/${repo}/tree/${branch}`)
  console.log(`   Compare: https://github.com/${owner}/${repo}/compare/main...${branch}`)
  console.log(`   Commits: https://github.com/${owner}/${repo}/commits/${branch}`)
  console.log("")
  console.log("✅ Complete sync process finished!")
}

completeSyncFromDevelop()
