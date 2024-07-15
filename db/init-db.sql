-- init-db.sql
CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255) NOT NULL
);
INSERT INTO messages (message) VALUES ('Hello from Backend and Database');

-- Create the user if it doesn't exist, without specifying the password
CREATE USER IF NOT EXISTS 'guang'@'%';

-- Set or update the user's password
ALTER USER 'guang'@'%' IDENTIFIED WITH mysql_native_password BY '123';

-- Grant all privileges to the user on the 'mydb' database
GRANT ALL PRIVILEGES ON mydb.* TO 'guang'@'%';

-- Apply the changes immediately
FLUSH PRIVILEGES;
