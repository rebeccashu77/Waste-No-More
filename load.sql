-- Some initial data to play with.  These INSERT statements should succeed.
-- Do NOT modify these.
INSERT INTO PossibleGoods VALUES('apple', 'fruit', 28);
INSERT INTO PossibleGoods VALUES('banana', 'fruit', 4);
INSERT INTO PossibleGoods VALUES('carrot', 'vegetable', 14);
INSERT INTO PossibleGoods VALUES('eggs', 'protein', 28);
INSERT INTO PossibleGoods VALUES('bread', 'grain', 7);

INSERT INTO User VALUES(0, 'Jonathan Yu', 'jy178@duke.edu', 'jy178', 'password', 0, 0, 1, 1, 0, 0);
INSERT INTO User VALUES(1, 'Jeevan Tewari', 'jmt62@duke.edu', 'jmt62', 'password', 1, 0, 0, 1, 1, 0);
INSERT INTO User VALUES(2, 'Rebecca Shu', 'rjs73@duke.edu', 'rjs73', 'password', 0, 0, 0, 0, 0, 0);
INSERT INTO User VALUES(3, 'Christina Le', 'cli58@duke.edu', 'cli58', 'password', 0, 1, 0, 0, 1, 1);
INSERT INTO User VALUES(4, 'Griffin Malm', 'gtm7@duke.edu', 'gtm7', 'password', 0, 1, 0, 1, 1, 1);

INSERT INTO Items VALUES(1, 'apples', '2020-02-15', 10, '2020-03-14');
INSERT INTO Items VALUES(3, 'bananas', '2020-02-15', 8, '2020-02-19');
INSERT INTO Items VALUES(2, 'carrots', '2020-02-15', 5, '2020-02-29');
INSERT INTO Items VALUES(3, 'eggs', '2020-02-15', 12, '2020-02-27');
INSERT INTO Items VALUES(1, 'bread', '2020-02-15', 1, '2020-02-22');

INSERT INTO Recipe VALUES('Tacos', 'Mexican', 'Ground beef', 'Cheese', 'Tomato', 'Salsa', 'Taco Shell', 0, 0, 0, 0, 0, 1);
INSERT INTO Recipe VALUES('Ratatouille', 'French', 'Tomato', 'Eggplant', 'Zucchini', 'Yellow Squash', 'Bell Pepper', 0, 1, 0, 1, 1, 1);
INSERT INTO Recipe VALUES('Cheeseburger', 'American', 'Ground beef', 'Cheese', 'Buns', 'Tomato', NULL, 0, 0, 0, 0, 0, 0);
INSERT INTO Recipe VALUES('Chicken Parmesan', 'Italian', 'Chicken', 'Cheese', 'Tomato', 'Pasta', 'Bread', 0, 0, 0, 0, 0, 1);
INSERT INTO Recipe VALUES('Pizza', 'Italian', 'Bread', 'Cheese', 'Tomato', NULL, NULL, 0, 1, 0, 0, 0, 1);






