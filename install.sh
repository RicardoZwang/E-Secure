#!/bin/bash

echo "Installing backend dependencies..."
cd backend
npm install
cd ..


echo "Install frontend dependencies..."
cd frontend
npm install
cd ..

