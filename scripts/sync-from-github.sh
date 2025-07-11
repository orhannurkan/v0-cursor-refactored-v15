#!/bin/bash

echo "🔄 GitHub'dan değişiklikleri çekiliyor..."

# Mevcut durumu kontrol et
git status

# Uzak repository'den güncellemeleri al
git fetch origin

# Ana branch'i güncelle
echo "📥 Main branch güncelleniyor..."
git checkout main
git pull origin main

# Develop branch'i güncelle (varsa)
if git show-ref --verify --quiet refs/heads/develop; then
    echo "📥 Develop branch güncelleniyor..."
    git checkout develop
    git pull origin develop
fi

# Ana branch'e geri dön
git checkout main

echo "✅ Senkronizasyon tamamlandı!"
git log --oneline -5
