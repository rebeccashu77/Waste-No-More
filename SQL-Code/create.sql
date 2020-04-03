CREATE TABLE Users
(id INTEGER NOT NULL PRIMARY KEY,
 name VARCHAR(256) NOT NULL, 
 email VARCHAR(256) NOT NULL UNIQUE, 
 username VARCHAR(256) NOT NULL UNIQUE, 
 password VARCHAR(256) NOT NULL,
 dietary_restrictions INTEGER [6],
 CHECK (
 	(dietary_restrictions[1] = 0 OR dietary_restrictions[1] = 1) AND
    (dietary_restrictions[2] = 0 OR dietary_restrictions[2] = 1) AND
    (dietary_restrictions[3] = 0 OR dietary_restrictions[3] = 1) AND
    (dietary_restrictions[4] = 0 OR dietary_restrictions[4] = 1) AND
    (dietary_restrictions[5] = 0 OR dietary_restrictions[5] = 1) AND
    (dietary_restrictions[6] = 0 OR dietary_restrictions[6] = 1)
 )
);

CREATE TABLE PossibleGoods
(name VARCHAR(256) NOT NULL PRIMARY KEY,
 type VARCHAR(256) NOT NULL,
 days_to_expiration INTEGER NOT NULL,
 CHECK (days_to_expiration > 0)
);

CREATE TABLE Items
(id INTEGER NOT NULL,
 name VARCHAR(256) NOT NULL, 
 purchase_date DATE NOT NULL,
 quantity INTEGER NOT NULL,
 expiration_date DATE NOT NULL,
 PRIMARY KEY (id, name, purchase_date),
 FOREIGN KEY (name) REFERENCES PossibleGoods(name),
 CHECK (quantity > 0)
);

CREATE TABLE Recipe
(name VARCHAR(256) NOT NULL PRIMARY KEY,
 cuisine VARCHAR(256) NOT NULL,
 ingredients text[],
 dietary_restrictions INTEGER [6],
 CHECK (
 	(dietary_restrictions[1] = 0 OR dietary_restrictions[1] = 1) AND
    (dietary_restrictions[2] = 0 OR dietary_restrictions[2] = 1) AND
    (dietary_restrictions[3] = 0 OR dietary_restrictions[3] = 1) AND
    (dietary_restrictions[4] = 0 OR dietary_restrictions[4] = 1) AND
    (dietary_restrictions[5] = 0 OR dietary_restrictions[5] = 1) AND
    (dietary_restrictions[6] = 0 OR dietary_restrictions[6] = 1)
 )
);