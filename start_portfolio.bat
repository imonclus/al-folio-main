@echo off
chcp 65001 >nul
title Servidor Local al-folio
cd /d "%~dp0"

echo ========================================================
echo   🚀 Servidor Local de al-folio (Jekyll + Docker)
echo ========================================================
echo.

:: 1. Verificar si Docker está en ejecución
echo [1/3] Verificando Docker Desktop...
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Docker Desktop no está iniciado o no responde.
    echo Por favor, abre Docker Desktop en Windows y vuelve a ejecutar este archivo.
    echo.
    pause
    exit /b 1
)
echo [OK] Docker Desktop está activo.
echo.

:: 2. Abrir el navegador automáticamente tras unos segundos
echo [2/3] Programando apertura automática del navegador...
echo       🌐 URL: http://localhost:8080/al-folio-main/
start "" /b powershell -Command "Start-Sleep -Seconds 8; Start-Process 'http://localhost:8080/al-folio-main/'"

:: 3. Iniciar el contenedor Jekyll con el volumen de gemas persistente
echo.
echo [3/3] Iniciando Jekyll...
echo --------------------------------------------------------
echo Nota: Para detener el servidor, pulsa Ctrl + C en esta ventana.
echo --------------------------------------------------------
echo.

docker compose run --rm -v al_folio_gems:/usr/local/bundle --service-ports jekyll bash -c "bundle check || bundle install && bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0"

echo.
echo ========================================================
echo  Servidor local detenido.
echo ========================================================
pause
