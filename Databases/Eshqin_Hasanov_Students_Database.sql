-- CREATE TABLE STUDENTS (
--     student_id PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     name varchar(50),
--     surname varchar(50),
--     age int,
--     department varchar(100),
--     gpa int,
--     birth_city varchar(100),
--     KEY(birth_city)
-- );

-- INSERT INTO STUDENTS (name, surname, age, department, gpa, birth_city) values
-- ("Nihad", "Elizada",18,"PAM",85,"Baku"),
-- ("Eshqin", "Hasanov",19,"IT",91,"Tovuz"),
-- ("Talib", "suleymanli",20,"PAM",96.4,"Saatli"),
-- ("Eljan", "Abbaszada",20,"IT",92.5,"Baku"),
-- ("Laman", "Haciyeva",21,"IT",93.2,"Baku"),
-- ("Emil", "Talibzade",20,"PAM",90,"Shaki"),
-- ("Ilqar", "Agayev",19,"NQM",79.7,"Khizi"),
-- ("Elmar", "Hasanov",19,"KM",75.6,"Khacmaz"),
-- ("Bakhtiyar", "Aghazade",21,"IT",77,"Yevlakh"),
-- ("Humay", "Agayeva",20,"NQM",83.2,"Khazakh"),
-- ("Lale", "Babayeva",19,"NQM",88,"Ordubad"),
-- ("Azer", "Aghayev",18,"KM",98.1,"Quba"),
-- ("Nurlana", "Ruslanova",19,"KM",89.1,"Baku"),
-- ("Parviz", "Shakirov",20,"IT",64.9,"Balaken"),
-- ("Osman", "Suleymanzade",18,"PAM",95.5,"Qusar"),
-- ("Fatima", "Abishova",19,"PAM",73.9,"Fuzuli"),
-- ("Mahammad", "Maharramov",17,"NQM",99.4,"Baku"),
-- ("Leyla", "Nadirova",22,"IT",76,"Lerik"),
-- ("Nargiz", "Bakhsheliyeva",20,"KM",87.7,"Ucar"),
-- ("Elchin", "Sabitoglu",20,"KM",97,"Oghuz");

-- task 1

-- select CONCAT(name, ' ', surname), age, birth_city from STUDENTS;

-- task 2

-- select CONCAT(left(surname, 1), ". ", name, "  ", age), birth_city from STUDENTS;

-- task 3

-- select CONCAT(left(surname, 1), ". ", name, "  ", age) from STUDENTS group by birth_city ;

-- task 4

-- select CONCAT(left(surname, 1), ". ", name, "  ", age), department from STUDENTS group by department;

-- task 5

-- select min(age), max(age), avg(age) from STUDENTS;

-- task 6

-- select avg(age) from STUDENTS group by birth_city;

-- task 7

-- select if (age>avg(age), name, FALSE) from students;

-- task 8

-- select count(*), department from STUDENTS group by department;

-- task 9

-- select CONCAT(name, " ", surname), department, if(age > 90, 'A', if(age > 80, 'B', if(age > 70, 'C', if(age > 60, 'D', 'Fail')))) FROM STUDENTS;