--WEBSITE DESIGN:

--GET USER ID AT LOGIN

SELECT id
FROM Users
WHERE username = 'gtm7';

--VIEW ACCOUNT INFO

SELECT name, email, username
FROM Users
WHERE Users.id = 1;

--DIETARY RESTRICTIONS

SELECT pescatarian, vegetarian, vegan, dairy_free, gluten_free, peanut_allergy
FROM Users
WHERE Users.id = 2;

--WHEN DETERMINING RECIPES → query all recipes with no violations for dietary restriction
-- → then query based on the ingredient that is going to expire first in their fridge

WITH AvailableRecipes AS
(SELECT Recipe.name, Recipe.cuisine, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5
FROM Recipe, Users
WHERE Users.id = 3 AND Users.dairy_free <= Recipe.dairy_free AND Users.gluten_free <= Recipe.gluten_free AND Users.peanut_allergy <= Recipe.peanut_allergy AND Users.pescatarian <= Recipe.pescatarian AND Users.vegetarian <= Recipe.vegetarian AND Users.vegan<= Recipe.vegan),
firstExpired AS (SELECT T1.name FROM (SELECT name, expiration_date
FROM Items
WHERE Items.id = 3 AND (CURRENT_DATE >= expiration_date - 3)
ORDER BY expiration_date DESC, name ASC) AS T1)
SELECT *
FROM AvailableRecipes, firstExpired
WHERE ingredient1 IN (SELECT name FROM firstExpired) OR ingredient2 IN (SELECT name FROM firstExpired) OR ingredient3 IN (SELECT name FROM firstExpired) OR ingredient4 IN (SELECT name FROM firstExpired) OR ingredient5 IN (SELECT name FROM firstExpired);

--FIND EXPIRATION DATE → for each food, pull up the expiration date

SELECT name, expiration_date
FROM Items
WHERE Items.id = 3
ORDER BY expiration_date DESC, name ASC;
