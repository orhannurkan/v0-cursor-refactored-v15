export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Hoş Geldiniz</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Bu sizin yeni projenizin başlangıç noktası. Buradan istediğiniz gibi geliştirmeye başlayabilirsiniz.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Başlayın
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
            Daha Fazla Bilgi
          </button>
        </div>
      </div>
    </main>
  )
}
