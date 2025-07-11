#!/bin/bash

echo "🔄 GitHub'dan değişiklikleri çekiliyor..."

# Mevcut durumu kontrol et
echo "📋 Mevcut durum kontrol ediliyor..."
git status

# Uzak repository'yi güncelle
echo "🌐 Uzak repository bilgileri güncelleniyor..."
git fetch origin

# Develop branch'indeki değişiklikleri çek
echo "⬇️ Develop branch'indeki değişiklikler çekiliyor..."
git pull origin develop

# Sonucu kontrol et
if [ $? -eq 0 ]; then
    echo "✅ Değişiklikler başarıyla çekildi!"
    echo "📊 Son commit bilgileri:"
    git log --oneline -5
else
    echo "❌ Pull işlemi başarısız! Conflict olabilir."
    echo "🔧 Conflict'leri çözmek için scripts/handle-conflicts.sh çalıştırın"
fi

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
