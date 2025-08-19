@echo off
REM Financial Dashboard Setup Script for Windows

echo 🚀 Starting Financial Dashboard setup...

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js v18 or later and try again.
    echo    Download it from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=*" %%v in ('node -v') do set NODE_VERSION=%%v
set NODE_VERSION=%NODE_VERSION:v=%
for /f "tokens=1 delims=." %%a in ("%NODE_VERSION%") do set MAJOR_VERSION=%%a

if %MAJOR_VERSION% LSS 18 (
    echo ❌ Node.js version %NODE_VERSION% is not supported. Please install Node.js v18 or later.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed. Please install npm and try again.
    pause
    exit /b 1
)

echo ✅ Node.js %NODE_VERSION% and npm are installed

echo 📦 Installing dependencies...
call npm install

REM Create .env file if it doesn't exist
if not exist ".env" (
    echo 📄 Creating .env file...
    copy /y .env.example .env >nul
    echo    Please update the .env file with your Supabase credentials
) else (
    echo ✅ .env file already exists
)

echo 🔨 Building the project...
call npm run build

echo.
echo ✨ Setup complete! ✨
echo.
echo To start the development server, run:
echo    npm run dev
echo.
echo Then open http://localhost:5173 in your browser

pause
