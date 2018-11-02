BULK INSERT ZAMOWIENIA
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\ordersT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '0x0a'
	)
ALTER TABLE ZAMOWIENIA DROP COLUMN Data_odebrania;

select * from ZAMOWIENIA
/*~~~~~~~~*/

BULK INSERT RESTAURACJE
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\restaurantsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '0x0a'
	)

select * from RESTAURACJE

/*~~~~~~~~*/
BULK INSERT PRODUKTY
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\productsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '0x0a'
	)

select * from PRODUKTY

/*~~~~~~~~*/
BULK INSERT ZESTAWY
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\mealsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '0x0a'
	)

select * from ZESTAWY
/*~~~~~~~~*/
BULK INSERT REKLAMACJE
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\complatintsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '0x0a'
	)

select * from REKLAMACJE
/*~~~~~~~~*/
BULK INSERT PRZYGOTOWANIA
FROM 'C:\Users\Karolina\Desktop\HD\mssql-data-generator\generated-data\t1\preparationsT1.csv'
	WITH
	(
		FIELDTERMINATOR = ',',
		ROWTERMINATOR = '0x0a'
	)

select * from PRZYGOTOWANIA

