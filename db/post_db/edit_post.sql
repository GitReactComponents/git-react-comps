UPDATE posts
SET (post_text) = $3
WHERE post_id = $1 AND user_id = $2;