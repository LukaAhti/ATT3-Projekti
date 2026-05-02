# Käyttöohje

Tämä käyttöohje kertoo, miten Huoltojen seuranta -sovellusta käytetään.

## Sovelluksen avaaminen

Sovellus avataan selaimessa joko GitHub Pages -linkistä tai avaamalla `index.html`-tiedosto selaimessa.

## Huoltokohteen lisääminen

1. Kirjoita huoltokohteen nimi kenttään "Kohteen nimi".
2. Paina "Lisää kohde".

Esimerkki huoltokohteesta:

- Sorvi
- Kompressori
- Trukki
- Hitsauslaite

Lisätty kohde ilmestyy huoltokohteiden listaan.

## Huoltotehtävän lisääminen

Kun huoltokohde on lisätty, sen alle ilmestyy lomake huoltotehtävän lisäämistä varten.

1. Kirjoita huoltotehtävän nimi.
2. Valitse huollon päivämäärä.
3. Paina "Lisää huolto".

Esimerkkejä huoltotehtävistä:

- Öljynvaihto
- Suodattimen vaihto
- Terien tarkistus
- Puhdistus
- Turvatarkastus

## Tulevat huollot

Tulevat huollot näkyvät "Tulevat huollot" -osiossa.

Tulevaksi huolloksi lasketaan tekemätön huolto, jonka päivämäärä on tänään tai tulevaisuudessa.

## Myöhässä olevat huollot

Myöhässä olevat huollot näkyvät "Myöhässä olevat huollot" -osiossa.

Myöhässä olevaksi huolloksi lasketaan tekemätön huolto, jonka päivämäärä on menneisyydessä.

## Huollon merkitseminen tehdyksi

Kun huolto on tehty, paina tehtävän kohdalla "Merkitse tehdyksi".

Tämän jälkeen tehtävä merkitään tehdyksi eikä se enää näy tulevien tai myöhässä olevien huoltojen listassa.

## Huoltotehtävän poistaminen

Huoltotehtävän voi poistaa painamalla tehtävän kohdalla "Poista".

Poistettu tehtävä häviää myös tulevien tai myöhässä olevien huoltojen listasta.

## Huoltokohteen poistaminen

Huoltokohteen voi poistaa painamalla kohteen kohdalla "Poista kohde".

Kun kohde poistetaan, myös kaikki siihen liittyvät huoltotehtävät poistetaan.

## Tietojen säilyminen

Sovellus tallentaa tiedot selaimen localStorageen.

Tämä tarkoittaa, että tiedot säilyvät, vaikka selain päivitetään tai suljetaan. Tiedot ovat kuitenkin käytettävissä vain samalla selaimella ja samalla laitteella.

## Huomioitavaa

Jos selaimen välimuisti tai sivuston tiedot tyhjennetään, myös sovelluksen tallentamat tiedot voivat poistua.
