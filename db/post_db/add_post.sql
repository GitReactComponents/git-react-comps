INSERT INTO posts (post_text, user_id, username) 
VALUES ($1, $2, $3)
RETURNING *;