CREATE TABLE User
(id INTEGER NOT NULL PRIMARY KEY,
 name VARCHAR(256) NOT NULL, 
 email VARCHAR(256) NOT NULL UNIQUE, 
 username VARCHAR(256) NOT NULL UNIQUE, 
 password VARCHAR(256) NOT NULL);

CREATE TABLE PossibleGoods
(name VARCHAR(256) NOT NULL PRIMARY KEY,
 type VARCHAR(256) NOT NULL,
 days_to_expiration INTEGER NOT NULL,
 CHECK (quantity > 0));

CREATE TABLE Items
(name VARCHAR(256) NOT NULL, 
 purchase_date DATE NOT NULL,
 quantity INTEGER NOT NULL,
 expiration_date DATE NOT NULL,
 PRIMARY KEY (name, purchase_date),
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
 diet VARCHAR(256) NOT NULL,
 dairy_free VARBINARY(1) NOT NULL,
 gluten_free VARBINARY(1) NOT NULL,
 peanut_allergy VARBINARY(1) NOT NULL,
 CHECK (diet = 'none' or diet = 'vegetarian'
 	or diet = 'vegan' or diet = 'pescetarian'));

CREATE TABLE DietaryRestrictions
(id INTEGER NOT NULL PRIMARY KEY,
 diet VARCHAR(256) NOT NULL,
 dairy_free VARBINARY(1) NOT NULL,
 gluten_free VARBINARY(1) NOT NULL,
 peanut_allergy VARBINARY(1) NOT NULL,
 FOREIGN KEY (id) REFERENCES User(id),
 CHECK (diet = 'none' or diet = 'vegetarian'
 	or diet = 'vegan' or diet = 'pescetarian'));