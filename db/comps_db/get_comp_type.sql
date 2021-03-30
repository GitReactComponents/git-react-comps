SELECT * FROM components
WHERE component_type = $1
RETURNING *;