UPDATE users
SET username = $1, first_name = $2, last_name = $3, email = $4, password = $5
WHERE user_id = $6
RETURNING *;