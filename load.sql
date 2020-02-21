-- Some initial data to play with.  These INSERT statements should succeed.
-- Do NOT modify these.
INSERT INTO PossibleGoods VALUES('apple', 'fruit', 28);
INSERT INTO PossibleGoods VALUES('banana', 'fruit', 4);
INSERT INTO PossibleGoods VALUES('carrot', 'vegetable', 14);
INSERT INTO PossibleGoods VALUES('eggs', 'protein', 28);
INSERT INTO PossibleGoods VALUES('bread', 'grain', 7);

INSERT INTO User VALUES(0, 'Jonathan Yu', 'jy178', 'password0');
INSERT INTO User VALUES(1, 'Jeevan Tewari', 'jmt62', 'password1');
INSERT INTO User VALUES(2, 'Rebecca Shu', 'rjs73', 'password2');
INSERT INTO User VALUES(3, 'Christina Le', 'cli58', 'password3');
INSERT INTO User VALUES(0, 'Griffin Malm', 'gtm7', 'password4');

INSERT INTO Items VALUES('apples', '02/15/2020', 10, '03/14/2020', 1);
INSERT INTO Items VALUES('bananas', '02/15/2020', 8, '02/19/2020', 3);
INSERT INTO Items VALUES('carrots', '02/15/2020', 5, '02/29/2020', 2);
INSERT INTO Items VALUES('eggs', '02/15/2020', 12, '02/27/2020', 3;
INSERT INTO Items VALUES('bread', '02/15/2020', 1, '02/22/2020', 14;

INSERT INTO DietaryRestrictions VALUES(0, 'vegan', 'yes', 'no', 'no');
INSERT INTO DietaryRestrictions VALUES(1, 'pescatarian', 'yes', 'yes', 'no');
INSERT INTO DietaryRestrictions VALUES(2, 'none', 'no', 'no', 'no');
INSERT INTO DietaryRestrictions VALUES(3, 'vegetarian', 'no', 'yes', 'yes');
INSERT INTO DietaryRestrictions VALUES(4, 'vegetarian', 'yes', 'yes', 'yes');

INSERT INTO Recipe VALUES('Tacos', 'Mexican', 'Ground beef', 'Cheese', 'Tomato', 'Salsa', 'Taco Shell', 'none', 'no', 'no', 'yes');
INSERT INTO Recipe VALUES('Ratatouille', 'French', 'Tomato', 'Eggplant', 'Zucchini', 'Yellow Squash', 'Bell Pepper', 'vegetarian', 'yes', 'yes', 'yes');
INSERT INTO Recipe VALUES('Cheeseburger', 'American', 'Ground beef', 'Cheese', 'Buns', 'Tomato', NULL, 'none', 'no', 'no', 'no');
INSERT INTO Recipe VALUES('Chicken Parmesan', 'Italian', 'Chicken', 'Cheese', 'Tomato', 'Pasta', 'Bread', 'none', 'no', 'no', 'yes');
INSERT INTO Recipe VALUES('Pizza', 'Italian', 'Bread', 'Cheese', 'Tomato', NULL, NULL, 'vegetatian', 'no', 'no', 'yes');






