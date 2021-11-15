create database NobelDB;
use NobelDB;

create table nobel_win (
    YEAR INT,
    SUBJECT VARCHAR(60),
    WINNER VARCHAR(60),
    COUNTRY VARCHAR(50),
    CATEGORY VARCHAR(50)
);

INSERT INTO nobel_win 
VALUES 
(1970, "Physics", "Hannes Alfven", "Sweden", "Scientist"),
(1970, "Physics", "Louis Neel", "France", "Scientist"),
(1970, "Chemistry", "Luis Federico Leloir", "France", "Scientist"),
(1970, "Physiology", "Ulf von Euler", "Sweden", "Scientist"),
(1970, "Physiology", "Bernard Katz", "Germany", "Scientist"),
(1970, "Literature", "Aleksandr Solzhenitsyn", "Russia", "Linguist"),
(1970, "Economics", "Paul Samuelson", "USA", "Economist"),
(1970, "Physiology", "Julius Axelrod", "USA", "Scientist"),
(1971, "Physics", "Dennis Gabor", "Hungary", "Scientist"),
(1971, "Chemistry", "Gerhard Herzberg", "Germany", "Scientist"),
(1971, "Peace", "Willy Brandt", "Germany", "Chancellor"),
(1971, "Literature", "Pablo Neruda", "Chile", "Linguist"),
(1971, "Economics", "Simon Kuznets", "Russia", "Economist"),
(1978, "Peace", "Anwar al-Sadat", "Egypt", "President"),
(1978, "Peace", "Menachem Begin", "Israel", "Prime Minister"),
(1987, "Chemistry", "Donald J. Cram", "USA", "Scientist"),
(1987, "Chemistry", "Jean-Marie Lehn", "France", "Scientist"),
(1987, "Physiology", "Susumu Tonegawa", "Japan", "Scientist"),
(1994, "Economics", "Reinhard Selten", "Germany", "Economist"),
(1994, "Peace", "Yitzhak Rabin", "Israel", "Prime Minister"),
(1987, "Physics", "Johannes Georg Bednorz", "Germany", "Scientist"),
(1987, "Literature", "Joseph Brodsky", "Russia", "Linguist"),
(1987, "Economics", "Robert Solow", "USA", "Economist"),
(1994, "Literature", "Kenzaburo Oe", "Japan", "Linguist");

-- task 1

select * from win where YEAR = 1970;

-- task 2

select winner from win where YEAR = 1971 and SUBJECT = "Literature";

-- task 3

select YEAR, SUBJECT from win WHERE WINNER = "Dennis Gabor";

-- task 4

select WINNER FROM win where YEAR > 1950 AND SUBJECT = "Physics";

-- task 5

select YEAR, SUBJECT, WINNER, COUNTRY from win where SUBJECT = "Chemistry" and YEAR > 1965 AND YEAR < 1975;

-- task 6

select * from win where CATEGORY = "Prime Minister" and YEAR > 1970 and WINNER in("Menachem Begin", "Yitzhak Rabin");

-- task 7

select * from win where WINNER like "Louis%";

-- task 8

select * from win where WINNER = "Johannes Georg Bednorz";

-- task 9

select * from win where YEAR > 1970 
order by 
    case 
        when SUBJECT in ("Economics", "Chemistry") then 1
        else 0
    end asc,
    SUBJECT,
    winner;