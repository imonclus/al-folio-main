@echo off
chcp 65001 >nul
title Subir Cambios a GitHub - al-folio
cd /d "%~dp0"

echo ========================================================
echo   🚀 Sincronizar y Subir Cambios a GitHub
echo ========================================================
echo.

:: 1. Comprobar el estado de Git
echo Archivos modificados o nuevos:
echo --------------------------------------------------------
git status -s
echo --------------------------------------------------------
echo.

:: 2. Solicitar mensaje de commit
set /p mensaje="📝 Escribe un mensaje para describir tus cambios: "
if "%mensaje%"=="" (
    set mensaje=Actualización de contenido
)

echo.
echo Guardando cambios (git add y commit)...
git add .
git commit -m "%mensaje%"

echo.
echo 🚀 Subiendo a GitHub (rama main)...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] No se pudo subir a GitHub. Revisa tu conexion o permisos.
    pause
    exit /b 1
)

echo.
echo ========================================================
echo ✅ ¡Listo! Cambios subidos correctamente.
echo En unos 2-3 minutos GitHub Actions compilará la web en:
echo 🌐 https://imonclus.github.io/al-folio-main/
echo ========================================================
echo.
pause
