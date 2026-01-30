#!/bin/bash
set -e

cd "$(dirname "$0")"

# Build widget if necessary
cd widget

if [ ! -d "node_modules" ] || [ "package-lock.json" -nt "node_modules" ]; then
  echo "📦 Installing widget dependencies..."
  npm ci
fi

if [ ! -d "dist" ] || [ -n "$(find src -newer dist -print -quit 2>/dev/null)" ]; then
  echo "🔨 Building widget..."
  npm run build
fi

cd ..

# Serve docs
echo "📖 Starting mdBook server..."
mdbook serve --open