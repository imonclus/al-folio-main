#!/bin/bash

cd /home/imonclus/docker/al-folio-main || exit

echo "📦 Detectando archivos modificados..."
git add .

echo ""
read -p "📝 Escribe un mensaje para describir estos cambios: " mensaje

git commit -m "$mensaje"

echo "🚀 Subiendo a GitHub..."
git push origin main

echo "✅ ¡Listo! En un par de minutos tu página web estará actualizada."