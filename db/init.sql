DROP TABLE posts;
DROP TABLE components;
DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(5000),
    is_admin BOOLEAN
);

CREATE TABLE IF NOT EXISTS  components (
    component_id SERIAL PRIMARY KEY,
    username VARCHAR(50) REFERENCES users(username),
    component_type VARCHAR(50),
    component_image JSON,
    component_description TEXT,
    component_info TEXT
);

CREATE TABLE IF NOT EXISTS  posts (
    post_id SERIAL PRIMARY KEY,
    component_id INT REFERENCES components(component_id),
    user_id INT REFERENCES users(user_id),
    username VARCHAR(50) REFERENCES users(username),
    post_text VARCHAR(1500)
);