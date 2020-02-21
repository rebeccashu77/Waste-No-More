# cs316_project

Data Management Application Idea:
Virtual Fridge

Food Recipe API: https://developer.edamam.com/edamam-recipe-api# <br />

Schema Outline:
PossibleGoods(name, type, days_to_expiration) <br />
Items(name, purchase_date, quantity, expiration_date) <br />
Recipe(name, cuisine, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5,..., diet, dairy-free, gluten-free, peanut-allergy) <br />
User(id, name, email, username, password) <br />
DietaryRestrictions(id, diet, dairy-free, gluten-free, peanut-allergy) <br />

Assumption - each user has one fridge
