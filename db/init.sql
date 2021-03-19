CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(5000),
    is_member BOOLEAN,
    is_admin BOOLEAN
);

CREATE TABLE components (
    component_id SERIAL PRIMARY KEY,
    component_type VARCHAR(50),
    component_image TEXT
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    component_id INT REFERENCES components (component_id),
    user_id INT REFERENCES users (user_id),
    post_text VARCHAR(1500)
);