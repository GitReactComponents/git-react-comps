INSERT INTO posts (post_text) 
VALUES ($1)
RETURNING *;