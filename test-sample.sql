--WEBSITE DESIGN:

--GET USER ID AT LOGIN

SELECT id
FROM User
WHERE username = gtm7;

--VIEW ACCOUNT INFO

SELECT name, email, username
FROM User
WHERE User.id = 1;

--DIETARY RESTRICTIONS

SELECT pescatarian, vegetarian, vegan, dairy-free, gluten-free, peanut-allergy
FROM User
WHERE User.id = 2;

--WHEN DETERMINING RECIPES → query all recipes with no violations for dietary restriction
-- → then query based on the ingredient that is going to expire first in their fridge

WITH AvailableRecipes AS
(SELECT Recipe.name, Recipe.cuisine, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5
FROM Recipe, User
WHERE User.id = 3 AND User.dairy-free <= Recipe.dairy-free AND User.gluten-free <= Recipe.gluten-free AND User.peanut-allergy <= Recipe.peanut-allergy AND User.pescatarian <= Recipe.pescatarian AND User.vegetarian <= Recipe.vegetarian AND User.vegan<= Recipe.vegan),
firstExpired AS (SELECT T1.food FROM (SELECT food, days_to_expiration
FROM Items
WHERE Items.id = 3 AND days_to_expiration <= 3
ORDER BY days_to_expiration DESC, food ASC) AS T1)
SELECT *
FROM AvailableRecipes, firstExpired
WHERE ingredient1 IN (SELECT food FROM firstExpired) OR ingredient2 IN (SELECT food FROM firstExpired) OR ingredient3 IN (SELECT food FROM firstExpired) OR ingredient4 IN (SELECT food FROM firstExpired) OR ingredient5 IN (SELECT food FROM firstExpired);

--FIND EXPIRATION DATE → for each food, pull up the expiration date

SELECT food, days_to_expiration
FROM Items
WHERE Items.id = 3
ORDER BY days_to_expiration DESC, food ASC;
