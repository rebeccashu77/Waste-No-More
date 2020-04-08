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

--SEARCH ITEMS TO ADD TO FRIDGE (add-by-search feature)
SELECT name, type
FROM PossibleGoods
WHERE name = 'ca%'
GROUP BY type
ORDER BY name ASC;

--VIEW ALL POSSIBLE ITEMS TO ADD TO FRIDGE
SELECT name, type
FROM PossibleGoods
ORDER BY name ASC, type ASC;

--VIEW ALL POSSIBLE TYPES OF FOOD TO ADD TO FRIDGE (add-by-type feature)
SELECT type
FROM PossibleGoods
ORDER BY type ASC;

--VIEW ALL POSSIBLE FRUITS TO ADD TO FRIDGE (add-by-type feature)
SELECT name
FROM PossibleGoods
WHERE type = 'fruit'
ORDER BY name ASC;

--VIEW USER'S FRIDGE
SELECT name, quantity, expiration_date
FROM Items
WHERE Items.id = 11
ORDER BY expiration_date ASC, name ASC;

--VIEW FOODS EXPIRING SOON
SELECT name, quantity, expiration_date
FROM Items
WHERE Items.id = 11 AND (CURRENT_DATE >= expiration_date - INTEGER '4')
ORDER BY expiration_date ASC, name ASC;