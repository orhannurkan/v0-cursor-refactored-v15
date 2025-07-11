# Proje Adı

Modern Next.js tabanlı web uygulaması başlangıç projesi.

## 📋 İçindekiler

- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)
- [İletişim](#iletişim)

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn
- Git

### Adım Adım Kurulum

1. Projeyi klonlayın:
\`\`\`bash
git clone https://github.com/kullanici-adi/proje-adi.git
cd proje-adi
\`\`\`

2. Bağımlılıkları yükleyin:
\`\`\`bash
npm install
# veya
yarn install
\`\`\`

3. Geliştirme sunucusunu başlatın:
\`\`\`bash
npm run dev
# veya
yarn dev
\`\`\`

4. Production build oluşturmak için:
\`\`\`bash
npm run build
# veya
yarn build
\`\`\`

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 💻 Kullanım

### Temel Kullanım

Projeyi başlattıktan sonra:

1. Ana sayfaya gidin
2. Gerekli bilgileri girin
3. İşlemlerinizi gerçekleştirin

### API Kullanımı

\`\`\`javascript
// Örnek API çağrısı
const response = await fetch('/api/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: 'örnek veri'
  })
});
\`\`\`

## ✨ Özellikler

- ⚡ Next.js 15 App Router
- 🎨 Tailwind CSS ile modern tasarım
- 🧩 shadcn/ui bileşen kütüphanesi
- 📱 Responsive tasarım
- 🌙 Dark mode desteği
- 🔧 TypeScript desteği

## 🛠️ Teknolojiler

Bu projede kullanılan ana teknolojiler:

- **Frontend:** React, Next.js, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Backend:** Node.js, Express
- **Veritabanı:** PostgreSQL, Prisma
- **Kimlik Doğrulama:** NextAuth.js
- **Deployment:** Vercel

## 📁 Proje Yapısı

\`\`\`
proje-adi/
├── app/                 # Next.js App Router
│   ├── api/               # API rotaları
│   ├── globals.css     # Global stiller
│   ├── layout.tsx      # Ana layout
│   └── page.tsx        # Ana sayfa
├── components/         # React bileşenleri
│   ├── ui/            # shadcn/ui bileşenleri
│   └── theme-provider.tsx
├── lib/               # Yardımcı fonksiyonlar
├── hooks/             # Custom React hooks
├── public/            # Statik dosyalar
├── scripts/              # Yardımcı scriptler
└── README.md             # Bu dosya
\`\`\`

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Katkıda bulunmak için:

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

### Geliştirme Kuralları

- Kod yazarken TypeScript kullanın
- Commit mesajlarını açıklayıcı yazın
- Testlerinizi yazın
- Linting kurallarına uyun

## 🧪 Test

Testleri çalıştırmak için:

\`\`\`bash
npm run test
# veya
yarn test
\`\`\`

## 🚀 Deployment

Bu proje Vercel üzerinde kolayca deploy edilebilir:

1. Vercel hesabınıza giriş yapın
2. GitHub repository'nizi bağlayın
3. Otomatik deployment başlayacaktır

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Geliştirici:** [Adınız](mailto:email@example.com)
- **Proje Linki:** [https://github.com/kullanici-adi/proje-adi](https://github.com/kullanici-adi/proje-adi)
- **Demo:** [https://proje-adi.vercel.app](https://proje-adi.vercel.app)

## 🙏 Teşekkürler

Bu projeyi mümkün kılan tüm katkıda bulunanlara teşekkürler:

- [Katkıda Bulunan 1](https://github.com/kullanici1)
- [Katkıda Bulunan 2](https://github.com/kullanici2)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
