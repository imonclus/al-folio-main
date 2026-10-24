#!/bin/bash

# Asegurarse de ejecutar desde el directorio donde reside el script
cd "$(dirname "$0")" || exit

echo "🚀 Iniciando el servidor local de al-folio..."
echo "🌐 El navegador se abrirá automáticamente en unos segundos..."

# Lanza un temporizador en segundo plano para abrir el navegador en Windows
(sleep 10 && explorer.exe "http://localhost:8080/al-folio-main/") &

docker compose run --rm -v al_folio_gems:/usr/local/bundle --service-ports jekyll bash -c "bundle check || bundle install && bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0"
