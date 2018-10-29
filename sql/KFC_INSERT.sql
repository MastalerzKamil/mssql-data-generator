BULK INSERT ZAMOWIENIA
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\ordersT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n' 
	)
ALTER TABLE ZAMOWIENIA DROP COLUMN Data_odebrania;

select * from ZAMOWIENIA
/*~~~~~~~~*/

BULK INSERT RESTAURACJE
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\restaurantsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from RESTAURACJE

/*~~~~~~~~*/
BULK INSERT PRODUKTY
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\productsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from PRODUKTY

/*~~~~~~~~

TE NIE DZIALJA*/
BULK INSERT ZESTAWY
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\mealsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from ZESTAWY
/*~~~~~~~~*/
BULK INSERT REKLAMACJE
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\complatintsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from REKLAMACJE
/*~~~~~~~~*/
BULK INSERT PRZYGOTOWANIA
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\preparationsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '\n'
	)

select * from PRZYGOTOWANIA

