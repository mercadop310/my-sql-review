/* step two */
DROP DATABASE IF EXISTS ball;
CREATE DATABASE ball;

USE ball
CREATE TABLE tennis (
    id INT auto_increment NOT NULL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    amount INT NOT NULL
);