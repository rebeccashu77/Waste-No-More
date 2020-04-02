--WEBSITE DESIGN:

--GET USER ID AT LOGIN

SELECT id
FROM Users
WHERE username = 'gtm7';

--VIEW ACCOUNT INFO

SELECT name, email, username
FROM Users
WHERE Users.id = 2;

--DIETARY RESTRICTIONS

SELECT dietary_restrictions
FROM Users
WHERE Users.id = 1;

--WHEN DETERMINING RECIPES → query all recipes with no violations for dietary restriction
-- → then query based on the ingredient that is going to expire first in their fridge

WITH AvailableRecipes AS
(SELECT Recipe.name, Recipe.cuisine, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5
FROM Recipe, Users
WHERE Users.id = 3 AND Users.dietary_restrictions[1] <= Recipe.dietary_restrictions[1] AND Users.dietary_restrictions[2] <= Recipe.dietary_restrictions[2] AND Users.dietary_restrictions[3] <= Recipe.dietary_restrictions[3] AND Users.dietary_restrictions[4] <= Recipe.dietary_restrictions[4] AND Users.dietary_restrictions[5] <= Recipe.dietary_restrictions[5] AND Users.dietary_restrictions[6]<= Recipe.dietary_restrictions[6]),
firstExpired AS (SELECT T1.name FROM (SELECT name, expiration_date
FROM Items
WHERE Items.id = 3 AND (CURRENT_DATE >= expiration_date - INTEGER '4')
ORDER BY expiration_date ASC, name ASC) AS T1)
SELECT *
FROM AvailableRecipes, firstExpired
WHERE ingredient1 IN (SELECT name FROM firstExpired) OR ingredient2 IN (SELECT name FROM firstExpired) OR ingredient3 IN (SELECT name FROM firstExpired) OR ingredient4 IN (SELECT name FROM firstExpired) OR ingredient5 IN (SELECT name FROM firstExpired);

--FIND EXPIRATION DATE → for each food, pull up the expiration date

SELECT name, expiration_date
FROM Items
WHERE Items.id = 2
ORDER BY expiration_date ASC, name ASC;
