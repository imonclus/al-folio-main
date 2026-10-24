#!/bin/bash

# Asegurarse de ejecutar desde el directorio donde reside el script
cd "$(dirname "$0")" || exit

echo "📦 Detectando archivos modificados..."
git status -s
git add .

echo ""
read -p "📝 Escribe un mensaje para describir estos cambios: " mensaje

git commit -m "$mensaje"

echo "🚀 Subiendo a GitHub..."
git push origin main

echo "✅ ¡Listo! En un par de minutos tu página web estará actualizada."