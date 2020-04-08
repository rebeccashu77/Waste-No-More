--WEBSITE DESIGN:

--GET USER ID AT LOGIN
SELECT id
FROM Users
WHERE email = 'gtm7@duke.edu';

--VIEW ACCOUNT INFO
SELECT name, email, username
FROM Users
WHERE Users.id = 2;

--DIETARY RESTRICTIONS
SELECT dietary_restrictions
FROM Users
WHERE Users.id = 1;

--VIEW POSSIBLE ITEMS TO ADD TO FRIDGE
SELECT name
FROM PossibleGoods
ORDER BY name ASC;

--VIEW USER'S FRIDGE
SELECT name, expiration_date
FROM Items
WHERE Items.id = 11
ORDER BY expiration_date ASC, name ASC;