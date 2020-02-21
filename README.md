# cs316_project

Data Management Application Idea:
Virtual Fridge

Food Recipe API: https://developer.edamam.com/edamam-recipe-api#

Schema Outline:
PossibleGoods(name, type, days_to_expiration)
Items(name, purchase_date, quantity, expiration_date)
Recipe(name, cuisine, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5,..., diet, dairy-free, gluten-free, peanut-allergy)
User(id, name, email, username, password)
DietaryRestrictions(id, diet, dairy-free, gluten-free, peanut-allergy)

Assumption - each user has one fridge
