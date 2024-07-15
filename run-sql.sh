#!/bin/bash

# Define variables for MySQL credentials and container name
MYSQL_CONTAINER_NAME="mysql-db"
MYSQL_DATABASE="mydb"
MYSQL_USER="root"
MYSQL_PASSWORD="123"
SQL_SCRIPT_PATH="./db/init-db.sql"  # Path to your SQL script

# Pull the MySQL Docker image
echo "Pulling the MySQL Docker image..."
docker pull mysql

# Check if the MySQL container already exists
if [ $(docker ps -aq -f name=^${MYSQL_CONTAINER_NAME}$) ]; then
    # Stop and remove the existing container
    echo "Removing existing MySQL container..."
    docker stop ${MYSQL_CONTAINER_NAME}
    docker rm ${MYSQL_CONTAINER_NAME}
fi

# Run the MySQL container with a volume for data persistence
echo "Running the MySQL container with data persistence..."
docker run --name ${MYSQL_CONTAINER_NAME} -e MYSQL_ROOT_PASSWORD=${MYSQL_PASSWORD} -v mysql-data:/var/lib/mysql -p 3306:3306 -d mysql

# Wait for MySQL to initialize
echo "Waiting for MySQL to initialize..."
sleep 30  # Wait 30 seconds for MySQL to initialize. Adjust this timing as necessary.
# Wait for MySQL to initialize

# Create the database if it doesn't exist
echo "Creating the ${MYSQL_DATABASE} database if it doesn't exist..."
docker exec -i ${MYSQL_CONTAINER_NAME} mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};"


# Execute the SQL script inside the MySQL container
echo "Initializing the database using ${SQL_SCRIPT_PATH}..."
docker exec -i ${MYSQL_CONTAINER_NAME} mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE} < ${SQL_SCRIPT_PATH}

echo "MySQL container setup and database initialization complete."


