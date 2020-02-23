CREATE TABLE User
(id INTEGER NOT NULL PRIMARY KEY,
 name VARCHAR(256) NOT NULL, 
 email VARCHAR(256) NOT NULL UNIQUE, 
 username VARCHAR(256) NOT NULL UNIQUE, 
 password VARCHAR(256) NOT NULL,
 pescatarian BINARY(1) NOT NULL,
 vegetarian BINARY NOT NULL,
 vegan BINARY NOT NULL,
 dairy_free BINARY NOT NULL,
 gluten_free BINARY NOT NULL,
 peanut_allergy BINARY NOT NULL,
 CHECK (diet = 'none' or diet = 'vegetarian'
 	or diet = 'vegan' or diet = 'pescetarian'));

CREATE TABLE PossibleGoods
(name VARCHAR(256) NOT NULL PRIMARY KEY,
 type VARCHAR(256) NOT NULL,
 days_to_expiration INTEGER NOT NULL,
 CHECK (days_to_expiration > 0));

CREATE TABLE Items
(id INTEGER NOT NULL,
 name VARCHAR(256) NOT NULL, 
 purchase_date DATE NOT NULL,
 quantity INTEGER NOT NULL,
 expiration_date DATE NOT NULL,
 PRIMARY KEY (id, name, purchase_date),
 FOREIGN KEY (name) REFERENCES PossibleGoods(name),
 CHECK (quantity > 0));

CREATE TABLE Recipe
(name VARCHAR(256) NOT NULL PRIMARY KEY,
 cuisine VARCHAR(256) NOT NULL,
 ingredient1 VARCHAR(256) NOT NULL,
 ingredient2 VARCHAR(256) NOT NULL,
 ingredient3 VARCHAR(256) NOT NULL,
 ingredient4 VARCHAR(256) NOT NULL,
 ingredient5 VARCHAR(256) NOT NULL,
 pescatarian BINARY(1) NOT NULL,
 vegetarian BINARY NOT NULL,
 vegan BINARY NOT NULL,
 dairy_free BINARY NOT NULL,
 gluten_free BINARY NOT NULL,
 peanut_allergy BINARY NOT NULL,
 CHECK (diet = 'none' or diet = 'vegetarian'
 	or diet = 'vegan' or diet = 'pescetarian'));