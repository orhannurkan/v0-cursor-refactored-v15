// GitHub'dan belirli bir dosyanın içeriğini çeken yardımcı script
async function fetchFileFromGitHub(filePath) {
  const owner = "orhannurkan"
  const repo = "v0-cursor-refactored-v15"
  const branch = "develop"

  try {
    console.log(`📥 Fetching ${filePath} from GitHub...`)

    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`
    const response = await fetch(url)
    const data = await response.json()

    if (data.content) {
      // Base64'ten decode et
      const content = atob(data.content)
      console.log(`✅ Successfully fetched ${filePath}`)
      console.log("📄 File content:")
      console.log("---")
      console.log(content)
      console.log("---")
      return content
    } else {
      console.log(`❌ Could not fetch ${filePath}`)
      console.log("Reason:", data.message || "Unknown error")
    }
  } catch (error) {
    console.log(`❌ Error fetching ${filePath}:`, error.message)
  }
}

// Yaygın dosyaları kontrol et
const commonFiles = ["app/page.tsx", "app/layout.tsx", "README.md", "package.json"]

console.log("🔍 Checking common files for updates...")
console.log("Files to check:", commonFiles.join(", "))
console.log("")
console.log('💡 Usage: Call fetchFileFromGitHub("path/to/file") to get specific file content')

// Örnek kullanım
// fetchFileFromGitHub('app/page.tsx');
