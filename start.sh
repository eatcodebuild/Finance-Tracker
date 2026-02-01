#!/bin/bash

# ----------------------------------------
# Start Postgres (Homebrew/Postgres@14)
# ----------------------------------------

echo "Starting Postgres..."
# Check if Postgres is running
if ! lsof -i :5432 > /dev/null; then
    echo "Postgres not running. Starting..."
    pg_ctl -D /opt/homebrew/var/postgresql@14 start
    # Wait a few seconds for Postgres to be ready
    sleep 5
else
    echo "Postgres already running."
fi

# ----------------------------------------
# Start backend
# ----------------------------------------
echo "Starting backend..."
cd backend || { echo "Backend folder not found"; exit 1; }
npm run dev-server &
BACKEND_PID=$!

# ----------------------------------------
# Start frontend
# ----------------------------------------
echo "Starting frontend..."
cd ../client || { echo "Client folder not found"; exit 1; }
npm run dev &
FRONTEND_PID=$!

# ----------------------------------------
# Wait for both processes
# ----------------------------------------
wait $BACKEND_PID $FRONTEND_PID