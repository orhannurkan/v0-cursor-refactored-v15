#!/bin/bash

echo "🔧 Merge conflict'leri çözülüyor..."

# Conflict'li dosyaları listele
echo "📋 Conflict'li dosyalar:"
git status --porcelain | grep "^UU"

# Conflict'li dosyaları göster
echo "🔍 Conflict detayları:"
git diff --name-only --diff-filter=U

echo "📝 Conflict'leri manuel olarak çözün:"
echo "1. Conflict'li dosyaları editörde açın"
echo "2. <<<<<<< HEAD ve >>>>>>> develop işaretlerini kaldırın"
echo "3. Doğru kodu seçin veya birleştirin"
echo "4. Dosyaları kaydedin"

read -p "Conflict'leri çözdünüz mü? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "✅ Değişiklikleri commit ediliyor..."
    git add .
    git commit -m "Resolve merge conflicts from develop branch"
    echo "🎉 Conflict'ler başarıyla çözüldü!"
else
    echo "⏸️ Conflict'leri çözdükten sonra tekrar çalıştırın"
fi
