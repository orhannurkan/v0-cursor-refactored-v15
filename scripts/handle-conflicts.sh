#!/bin/bash

echo "⚠️  Merge conflict'leri çözülüyor..."

# Conflict'li dosyaları listele
echo "Conflict'li dosyalar:"
git diff --name-only --diff-filter=U

# Conflict'leri otomatik çözmeye çalış
git mergetool

# Manuel çözüm gerekiyorsa
echo "Manuel olarak conflict'leri çözün ve şu komutu çalıştırın:"
echo "git add . && git commit -m 'Resolve merge conflicts'"
