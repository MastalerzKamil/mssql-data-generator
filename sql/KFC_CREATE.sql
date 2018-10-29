CREATE TABLE RESTAURACJE
(
	ID_restauracji INT PRIMARY KEY,
	Miejsowosc VARCHAR (70) NOT NULL,
	Adres VARCHAR (70) NOT NULL,
	Kod_pocztowy VARCHAR (7) NOT NULL
);

CREATE TABLE ZAMOWIENIA
(
	ID_zamowienia INT PRIMARY KEY,
	Data_zamowienia date NOT NULL,
	Godzina_zamowienia time NOT NULL,
	Data_odebrania date NOT NULL,
	Godzina_odebrania time NOT NULL,
	Numer_zamowienia INT CHECK(Numer_zamowienia<1000) NOT NULL,
	ID_restauracji INT REFERENCES RESTAURACJE
);

CREATE TABLE ZESTAWY
(
	ID_zestawu INT IDENTITY(1,1) Primary key,
	Nazwa_zestawu VARCHAR (100) NOT NULL,
	Ilosc INT NOT NULL,
	Uwagi VARCHAR (200),
	ID_zamowienia INT REFERENCES ZAMOWIENIA NOT NULL
);

CREATE TABLE PRODUKTY
(
	Nazwa VARCHAR (50) PRIMARY KEY
);

CREATE TABLE PRZYGOTOWANIA
(
	ID INT IDENTITY(1,1) Primary key,
	Nazwa VARCHAR (50) REFERENCES PRODUKTY NOT NULL,
	Rodzaj VARCHAR (30)
		CHECK(Rodzaj IN ('smazenie','pakowanie', 'krojenie', 'mycie', 'nalewanie')) NOT NULL,
	Czas time NOT NULL,
	Stanowisko VARCHAR (50)
		CHECK(Stanowisko IN ('Uczacy sie', 'Kasjer', 'Kucharz', 'Serwis', 'Pakowacz'))
		NOT NULL,
	ID_zestawu INT REFERENCES ZESTAWY NOT NULL,
);

CREATE TABLE REKLAMACJE
(
	ID_reklamacji INT IDENTITY(1,1) PRIMARY KEY,
	Przyczyna VARCHAR (30)
		CHECK(Przyczyna IN ('Zbyt dlugi czas oczekiwania','nieswieze jedzenie', 'zle zapakowane jedzenie',
		'inne')) NOT NULL,
	Uwagi VARCHAR (150),
	ID_zamowienia INT REFERENCES ZAMOWIENIA
);

