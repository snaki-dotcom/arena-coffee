@echo off
title Arena Coffee Deployment

echo 🚀 Deploying Arena Coffee Website...
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize git repository if not exists
if not exist ".git" (
    echo 🔧 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: Arena Coffee website"
)

echo 🔗 Please create a new repository on GitHub named 'arena-coffee'
echo 🔗 Then run the following commands:
echo.
echo git remote add origin https://github.com/YOURUSERNAME/arena-coffee.git
echo git push -u origin main
echo.
echo 🔄 Replace YOURUSERNAME with your actual GitHub username
echo.

pause