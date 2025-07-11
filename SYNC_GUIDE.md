# GitHub Sync Rehberi

Bu rehber, GitHub'daki develop branch'indeki değişiklikleri v0'a manuel olarak aktarmanız için hazırlanmıştır.

## 🔄 Adım Adım Sync Süreci

### 1. GitHub Repository'yi Kontrol Edin
- [Repository Link](https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop)
- Develop branch'inde olduğunuzdan emin olun
- Son commit'leri inceleyin

### 2. Değişiklikleri Tespit Edin
\`\`\`bash
# Son commit'leri görmek için
git log --oneline -10

# Belirli bir commit'in detaylarını görmek için
git show <commit-hash>
\`\`\`

### 3. Dosya Güncelleme Süreci

#### Yöntem 1: GitHub Web Interface
1. Değişen dosyayı GitHub'da açın
2. **Raw** butonuna tıklayın
3. İçeriği kopyalayın (Ctrl+A, Ctrl+C)
4. v0'da ilgili dosyayı bulun
5. İçeriği yapıştırın (Ctrl+V)

#### Yöntem 2: Commit Karşılaştırması
1. GitHub'da **Commits** sekmesine gidin
2. İlgili commit'e tıklayın
3. **Files changed** sekmesinde değişiklikleri görün
4. Yeşil (+) ve kırmızı (-) satırları takip edin
5. Değişiklikleri v0'da uygulayın

### 4. Yaygın Güncellenen Dosyalar

| Dosya | Açıklama | Öncelik |
|-------|----------|---------|
| `app/page.tsx` | Ana sayfa bileşeni | Yüksek |
| `app/layout.tsx` | Ana layout | Yüksek |
| `README.md` | Proje dokümantasyonu | Orta |
| `package.json` | Bağımlılıklar | Yüksek |
| `components/ui/*.tsx` | UI bileşenleri | Orta |
| `tailwind.config.ts` | Tailwind yapılandırması | Düşük |

### 5. Güncelleme Sonrası Kontroller

- [ ] Proje hatasız çalışıyor mu?
- [ ] Tüm bileşenler doğru render ediliyor mu?
- [ ] Styling sorunları var mı?
- [ ] TypeScript hataları var mı?

### 6. Sorun Giderme

#### Yaygın Hatalar:
- **Import hataları**: Dosya yollarını kontrol edin
- **TypeScript hataları**: Tip tanımlarını kontrol edin
- **CSS sorunları**: Tailwind sınıflarını kontrol edin

#### Hata Çözüm Adımları:
1. Hata mesajını okuyun
2. İlgili dosyayı kontrol edin
3. GitHub'daki orijinal dosya ile karşılaştırın
4. Eksik kısımları tamamlayın

## 🛠️ Faydalı Araçlar

### GitHub Karşılaştırma URL'leri
\`\`\`
# İki commit arasındaki farkı görmek için
https://github.com/orhannurkan/v0-cursor-refactored-v15/compare/COMMIT1...COMMIT2

# Branch karşılaştırması
https://github.com/orhannurkan/v0-cursor-refactored-v15/compare/main...develop
\`\`\`

### Hızlı Erişim Linkleri
- [Develop Branch](https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop)
- [Recent Commits](https://github.com/orhannurkan/v0-cursor-refactored-v15/commits/develop)
- [Pull Requests](https://github.com/orhannurkan/v0-cursor-refactored-v15/pulls)

## 📝 Sync Geçmişi

Sync işlemlerinizi takip etmek için:

| Tarih | Commit | Dosyalar | Durum |
|-------|--------|----------|-------|
| - | - | - | - |

---

**Not**: Bu rehberi bookmark'layın ve her sync işleminde referans olarak kullanın.
