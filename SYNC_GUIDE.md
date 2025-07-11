# Git Pull Origin Develop - Sync Guide

Bu rehber, GitHub'daki `develop` branch'indeki değişiklikleri v0'a manuel olarak aktarmanız için hazırlanmıştır.

## 🔄 Otomatik Senkronizasyon

v0'da GitHub entegrasyonu varsa:
1. **Project Settings** → **GitHub** bölümüne gidin
2. **Sync from Repository** butonuna tıklayın
3. `develop` branch'ini seçin

## 📋 Manuel Senkronizasyon Adımları

### 1. Repository'yi Kontrol Edin
- [Develop Branch](https://github.com/orhannurkan/v0-cursor-refactored-v15/tree/develop) sayfasını açın
- Son commit'leri inceleyin
- Değişen dosyaları belirleyin

### 2. Branch Karşılaştırması
- [Branch Comparison](https://github.com/orhannurkan/v0-cursor-refactored-v15/compare/main...develop) sayfasını açın
- Hangi dosyaların değiştiğini görün
- Değişikliklerin kapsamını anlayın

### 3. Önemli Dosyalar

Öncelikle bu dosyaları kontrol edin:

#### Ana Uygulama Dosyaları
- `app/page.tsx` - Ana sayfa bileşeni
- `app/layout.tsx` - Kök layout
- `app/globals.css` - Global stiller

#### Konfigürasyon Dosyaları
- `package.json` - Bağımlılıklar
- `next.config.mjs` - Next.js konfigürasyonu
- `tailwind.config.ts` - Tailwind CSS ayarları

#### Bileşenler
- `components/ui/` - UI bileşenleri
- `components/theme-provider.tsx` - Tema sağlayıcısı

#### Dokümantasyon
- `README.md` - Proje dokümantasyonu

### 4. Dosya Güncelleme Süreci

Her dosya için:

1. **GitHub'da dosyayı açın**
   - Develop branch'inde ilgili dosyaya gidin
   - "Raw" butonuna tıklayın

2. **İçeriği kopyalayın**
   - Tüm dosya içeriğini seçin
   - Ctrl+C ile kopyalayın

3. **v0'da güncelleyin**
   - v0'da aynı dosyayı bulun
   - Eski içeriği silin
   - Yeni içeriği yapıştırın

4. **Değişiklikleri kaydedin**
   - Dosyayı kaydedin
   - Syntax hatalarını kontrol edin

### 5. Test ve Doğrulama

Güncelleme sonrası:

- [ ] Proje başarıyla build oluyor mu?
- [ ] Ana sayfa düzgün görüntüleniyor mu?
- [ ] Responsive tasarım çalışıyor mu?
- [ ] Tüm bileşenler yükleniyor mu?
- [ ] Console'da hata var mı?

## 🛠️ Yararlı Scriptler

### Tüm Dosyaları Listele
\`\`\`bash
node scripts/fetch-all-files.js
\`\`\`

### Son Commit'leri Görüntüle
\`\`\`bash
node scripts/git-pull-simulation.js
\`\`\`

### Manuel Sync Rehberi
\`\`\`bash
bash scripts/manual-sync-guide.sh
\`\`\`

## ⚠️ Dikkat Edilmesi Gerekenler

1. **Backup Alın**: Güncelleme öncesi mevcut dosyalarınızın yedeğini alın
2. **Adım Adım**: Tüm dosyaları birden değil, tek tek güncelleyin
3. **Test Edin**: Her güncelleme sonrası projeyi test edin
4. **Conflict'ler**: Çakışan değişiklikler varsa dikkatli birleştirin

## 🔧 Sorun Giderme

### Build Hataları
- Syntax hatalarını kontrol edin
- Import/export statement'ları doğru mu?
- Bağımlılıklar eksik mi?

### Stil Sorunları
- CSS class'ları doğru mu?
- Tailwind konfigürasyonu güncel mi?
- Global stiller çakışıyor mu?

### Bileşen Hataları
- Props doğru geçiliyor mu?
- Hook'lar doğru kullanılıyor mu?
- Type definition'lar uyumlu mu?

---

Bu rehberi takip ederek develop branch'indeki tüm değişiklikleri başarıyla v0'a aktarabilirsiniz.
