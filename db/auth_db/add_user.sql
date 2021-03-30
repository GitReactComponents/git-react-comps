INSERT INTO users (
    first_name,
    last_name,
    birthday,
    email,
    username,
    password
)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;