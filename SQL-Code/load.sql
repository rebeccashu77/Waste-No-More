-- Some initial data to play with.  These INSERT statements should succeed.
-- Do NOT modify these.
INSERT INTO PossibleGoods VALUES('apple', 'fruit', 28);
INSERT INTO PossibleGoods VALUES('banana', 'fruit', 4);
INSERT INTO PossibleGoods VALUES('carrot', 'vegetable', 14);
INSERT INTO PossibleGoods VALUES('eggs', 'protein', 28);
INSERT INTO PossibleGoods VALUES('bread', 'grain', 7);

INSERT INTO Users VALUES(1, 'Jeevan Tewari', 'jmt62@duke.edu', 'jmt62', 'password', '{1, 0, 0, 1, 1, 0}');
INSERT INTO Users VALUES(2, 'Rebecca Shu', 'rjs73@duke.edu', 'rjs73', 'password', '{0, 0, 0, 0, 0, 0}');
INSERT INTO Users VALUES(3, 'Christina Le', 'cli58@duke.edu', 'cli58', 'password', '{0, 0, 0, 0, 0, 0}');
INSERT INTO Users VALUES(4, 'Griffin Malm', 'gtm7@duke.edu', 'gtm7', 'password', '{0, 1, 0, 1, 1, 1}');
INSERT INTO Users VALUES(5, 'Jonathan Yu', 'jy178@duke.edu', 'jy178', 'password', '{0, 0, 1, 1, 0, 0}');

INSERT INTO Items VALUES(1, 'apple', CURRENT_DATE, 10, CURRENT_DATE+28);
INSERT INTO Items VALUES(3, 'banana', CURRENT_DATE, 8, CURRENT_DATE+4);
INSERT INTO Items VALUES(2, 'carrot', CURRENT_DATE, 5, CURRENT_DATE+14);
INSERT INTO Items VALUES(3, 'eggs', CURRENT_DATE, 12, CURRENT_DATE+28);
INSERT INTO Items VALUES(3, 'bread', CURRENT_DATE, 1, CURRENT_DATE+7);
INSERT INTO Items VALUES(2, 'bread', CURRENT_DATE, 1, CURRENT_DATE+7);

INSERT INTO Recipe VALUES('Tacos', 'Mexican', '{"ground beef", "cheese", "tomato", "salsa", "taco shell"}', '{0, 0, 0, 0, 0, 1}');
INSERT INTO Recipe VALUES('Ratatouille', 'French', '{"tomato", "eggplant", "zucchini", "yellow squash", "bell pepper"}', '{0, 1, 0, 1, 1, 1}');
INSERT INTO Recipe VALUES('Cheeseburger', 'American', '{"ground beef", "cheese", "buns", "tomato"}', '{0, 0, 0, 0, 0, 0}');
INSERT INTO Recipe VALUES('Chicken Parmesan', 'Italian', '{"chicken", "cheese", "tomato", "pasta", "bread"}', '{0, 0, 0, 0, 0, 1}');
INSERT INTO Recipe VALUES('Pizza', 'Italian', '{"bread", "cheese", "tomato"}', '{0, 1, 0, 0, 0, 1}');
INSERT INTO Recipe VALUES('Banana Bread', 'American', '{"bread", "banana", "eggs", "butter"}', '{1, 1, 0, 0, 0, 1}');