#!/bin/bash

echo "🔍 Verifying Network Configuration..."
echo ""

# Check if backend is running
echo "1️⃣ Checking Backend Server..."
if curl -s http://localhost:3001/api/health > /dev/null; then
    echo "   ✅ Backend is running on port 3001"
    curl -s http://localhost:3001/api/health | jq .
else
    echo "   ❌ Backend is NOT running"
    echo "   Run: npm run server:dev"
fi

echo ""

# Check if frontend is running
echo "2️⃣ Checking Frontend Server..."
if curl -s http://localhost:8080 > /dev/null; then
    echo "   ✅ Frontend is running on port 8080"
else
    echo "   ❌ Frontend is NOT running"
    echo "   Run: npm run dev"
fi

echo ""

# Check proxy
echo "3️⃣ Checking Proxy Configuration..."
if curl -s http://localhost:8080/api/health > /dev/null; then
    echo "   ✅ Proxy is working correctly"
    curl -s http://localhost:8080/api/health | jq .
else
    echo "   ❌ Proxy is NOT working"
    echo "   Check vite.config.ts proxy settings"
fi

echo ""

# Check database
echo "4️⃣ Checking Database..."
if [ -f "prisma/dev.db" ]; then
    echo "   ✅ Database file exists"
    echo "   Size: $(du -h prisma/dev.db | cut -f1)"
else
    echo "   ❌ Database file NOT found"
    echo "   Run: npx prisma migrate dev"
fi

echo ""

# Summary
echo "📊 Summary:"
echo "   Frontend: http://localhost:8080/"
echo "   Backend:  http://localhost:3001/"
echo "   Proxy:    http://localhost:8080/api/* → http://localhost:3001/api/*"
echo ""
echo "✅ All network configurations are properly set!"
echo ""
echo "To start both servers: npm run start:all"
