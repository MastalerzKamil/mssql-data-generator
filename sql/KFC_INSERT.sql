BULK INSERT ZAMOWIENIA
FROM 'F:\Studia\SEMESTR 5\HD\dane\t1\ordersT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n' 
	)
ALTER TABLE ZAMOWIENIA DROP COLUMN Data_odebrania;

select * from ZAMOWIENIA
/*~~~~~~~~*/

BULK INSERT RESTAURACJE
FROM 'F:\Studia\SEMESTR 5\HD\dane\t1\restaurants.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from RESTAURACJE

/*~~~~~~~~*/
BULK INSERT PRODUKTY
FROM 'F:\Studia\SEMESTR 5\HD\dane\t1\productsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from PRODUKTY

/*~~~~~~~~

TE NIE DZIALJA*/
BULK INSERT ZESTAWY
FROM 'F:\Studia\SEMESTR 5\HD\dane\t1\mealsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from ZESTAWY
/*~~~~~~~~*/
BULK INSERT REKLAMACJE
FROM 'F:\Studia\SEMESTR 5\HD\dane\t1\complatintsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from REKLAMACJE
/*~~~~~~~~*/
BULK INSERT PRZYGOTOWANIA
FROM 'F:\Studia\SEMESTR 5\HD\dane\t1\preparationsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from PRZYGOTOWANIA

