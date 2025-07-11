# GitHub Sync Guide for v0

Bu rehber, GitHub'daki değişiklikleri v0'a manuel olarak aktarmanız için hazırlanmıştır.

## 🔄 Manuel Senkronizasyon Adımları

### 1. GitHub Repository'sini Açın
[https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop](https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop)

### 2. Son Commit'leri Kontrol Edin
- **Commits** linkine tıklayın
- Son değişiklikleri inceleyin
- Hangi dosyaların değiştiğini not edin

### 3. Değişen Dosyaları Belirleyin
Genellikle değişen dosyalar:
- `app/page.tsx` - Ana sayfa bileşeni
- `app/layout.tsx` - Layout bileşeni
- `components/ui/*.tsx` - UI bileşenleri
- `README.md` - Proje dokümantasyonu
- `package.json` - Bağımlılıklar

### 4. Dosya İçeriklerini Kopyalayın
Her değişen dosya için:
1. Dosyaya tıklayın
2. **Raw** butonuna tıklayın
3. İçeriği kopyalayın (Ctrl+A, Ctrl+C)
4. v0'da ilgili dosyayı bulun
5. İçeriği yapıştırın (Ctrl+V)

### 5. Değişiklikleri Test Edin
- v0'da kodu çalıştırın
- Hataları kontrol edin
- Görünümü test edin

## 🚀 Otomatik Senkronizasyon

v0'da GitHub entegrasyonu kullanarak:
1. **Project Settings** → **GitHub**
2. Repository'nizi bağlayın
3. **Sync** butonunu kullanın

## 📝 Sık Karşılaşılan Durumlar

### Merge Conflicts
Eğer aynı dosyada hem v0'da hem GitHub'da değişiklik yaptıysanız:
1. Her iki versiyonu karşılaştırın
2. Hangi değişiklikleri tutacağınıza karar verin
3. Manuel olarak birleştirin

### Yeni Dosyalar
GitHub'da yeni dosya eklendiyse:
1. v0'da aynı konumda yeni dosya oluşturun
2. İçeriği kopyalayın

### Silinen Dosyalar
GitHub'da dosya silindiyse:
1. v0'da da aynı dosyayı silin
2. Import'ları kontrol edin

## ✅ Kontrol Listesi

- [ ] GitHub'daki son commit'leri kontrol ettim
- [ ] Değişen dosyaları belirledim
- [ ] Dosya içeriklerini v0'a kopyaladım
- [ ] Kodu test ettim
- [ ] Hatalar varsa düzelttim
- [ ] Proje çalışıyor

## 🆘 Yardım

Sorun yaşarsanız:
1. v0'da **Undo** (Ctrl+Z) kullanın
2. GitHub'daki dosya geçmişini kontrol edin
3. Adım adım tekrar deneyin
