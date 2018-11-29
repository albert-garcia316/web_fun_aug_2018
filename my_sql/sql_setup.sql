USE twitter
SELECT * FROM users;
INSERT INTO users (first_name, last_name, handle, birthday, created_at, updated_at)
VALUES ('Albert', 'Garcia', 'a_garcia', '1990-10-26', now(), now());
-- insert myself into it
DELETE FROM users WHERE users.id = 7;
-- delete my row
UPDATE users SET handle = 'The GOAT' WHERE users.id = 1;
-- Change user id 1's handle to be The GOAT
UPDATE users SET handle = 'kobebryant' WHERE users.id = 1;
--changed it back