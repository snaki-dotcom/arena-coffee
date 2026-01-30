#!/bin/bash
# Arena Coffee Deployment Script

echo "🚀 Deploying Arena Coffee Website..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git repository if not exists
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Arena Coffee website"
fi

# Add remote repository (user needs to create this on GitHub first)
echo "🔗 Please create a new repository on GitHub named 'arena-coffee'"
echo "🔗 Then run: git remote add origin https://github.com/YOURUSERNAME/arena-coffee.git"
echo "🔗 Replace YOURUSERNAME with your actual GitHub username"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment complete!"
echo "🌐 Your website will be live at: https://YOURUSERNAME.github.io/arena-coffee"
echo "🔄 Remember to enable GitHub Pages in your repository settings"