# Testausohjeet

Tässä dokumentissa kuvataan Huoltojen seuranta -sovelluksen manuaaliset testitapaukset.

## Testausympäristö

Sovellus testataan selaimessa.

Esimerkkiselaimet:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Sovellus ei vaadi palvelinta tai tietokantaa.

## Testi 1: Sovelluksen avaaminen

### Vaiheet

1. Avaa sovellus selaimessa.
2. Tarkista, että sivu latautuu.

### Odotettu tulos

- Sivulla näkyy otsikko "Huoltojen seuranta".
- Sivulla näkyy lomake huoltokohteen lisäämiseen.
- Sivulla näkyvät osiot huoltokohteille, tuleville huolloille ja myöhässä oleville huolloille.

### Tulos

Hyväksytty.

## Testi 2: Huoltokohteen lisääminen

### Vaiheet

1. Kirjoita huoltokohteen nimeksi "Sorvi".
2. Paina "Lisää kohde".

### Odotettu tulos

- Kohde "Sorvi" ilmestyy huoltokohteiden listaan.
- Kohteen alle ilmestyy lomake huoltotehtävän lisäämistä varten.

### Tulos

Hyväksytty.

## Testi 3: Huoltotehtävän lisääminen

### Vaiheet

1. Lisää huoltokohde "Sorvi".
2. Kirjoita huoltotehtävän nimeksi "Öljynvaihto".
3. Valitse tuleva päivämäärä.
4. Paina "Lisää huolto".

### Odotettu tulos

- Huoltotehtävä "Öljynvaihto" näkyy kohteen alla.
- Tehtävällä näkyy valittu päivämäärä.
- Tehtävän tila on "Tuleva".
- Tehtävä näkyy myös "Tulevat huollot" -osiossa.

### Tulos

Hyväksytty.

## Testi 4: Myöhässä olevan huollon näyttäminen

### Vaiheet

1. Lisää huoltokohde.
2. Lisää huoltotehtävä, jonka päivämäärä on menneisyydessä.
3. Älä merkitse tehtävää tehdyksi.

### Odotettu tulos

- Tehtävä näkyy kohteen alla tilassa "Myöhässä".
- Tehtävä näkyy "Myöhässä olevat huollot" -osiossa.

### Tulos

Hyväksytty.

## Testi 5: Huollon merkitseminen tehdyksi

### Vaiheet

1. Lisää huoltotehtävä.
2. Paina tehtävän kohdalla "Merkitse tehdyksi".

### Odotettu tulos

- Tehtävän tila muuttuu tehdyksi.
- Tehtävä ei näy tulevien huoltojen listassa.
- Tehtävä ei näy myöhässä olevien huoltojen listassa.

### Tulos

Hyväksytty.

## Testi 6: Huoltotehtävän poistaminen

### Vaiheet

1. Lisää huoltokohde.
2. Lisää huoltotehtävä.
3. Paina tehtävän kohdalla "Poista".

### Odotettu tulos

- Huoltotehtävä poistuu kohteen alta.
- Huoltotehtävä ei näy tulevien tai myöhässä olevien listassa.

### Tulos

Hyväksytty.

## Testi 7: Huoltokohteen poistaminen

### Vaiheet

1. Lisää huoltokohde.
2. Lisää kohteelle yksi tai useampi huoltotehtävä.
3. Paina "Poista kohde".
4. Vahvista poisto.

### Odotettu tulos

- Huoltokohde poistuu listasta.
- Kohteeseen liittyvät huoltotehtävät poistuvat myös.
- Kohteen tehtävät eivät näy tulevien tai myöhässä olevien listassa.

### Tulos

Hyväksytty.

## Testi 8: Tietojen säilyminen selaimen päivityksen jälkeen

### Vaiheet

1. Lisää huoltokohde.
2. Lisää kohteelle huoltotehtävä.
3. Päivitä selain.
4. Tarkista näkyvätkö lisätyt tiedot edelleen.

### Odotettu tulos

- Huoltokohde säilyy näkyvissä.
- Huoltotehtävä säilyy näkyvissä.
- Tulevat ja myöhässä olevat huollot päivittyvät oikein.

### Tulos

Hyväksytty.

## Testi 9: Tyhjän huoltokohteen lisääminen

### Vaiheet

1. Jätä huoltokohteen nimi tyhjäksi.
2. Paina "Lisää kohde".

### Odotettu tulos

- Sovellus ei lisää tyhjää kohdetta.
- Käyttäjälle näytetään ilmoitus tai selaimen lomake-estot toimivat.

### Tulos

Hyväksytty.

## Testi 10: Tyhjän huoltotehtävän lisääminen

### Vaiheet

1. Lisää huoltokohde.
2. Jätä huoltotehtävän nimi tai päivämäärä tyhjäksi.
3. Paina "Lisää huolto".

### Odotettu tulos

- Sovellus ei lisää puutteellista huoltotehtävää.
- Käyttäjälle näytetään ilmoitus tai selaimen lomake-estot toimivat.

### Tulos

Hyväksytty.

## Yhteenveto

Manuaalisen testauksen perusteella sovelluksen keskeiset ominaisuudet toimivat suunnitellusti:

- kohteiden lisääminen
- huoltotehtävien lisääminen
- tulevien huoltojen näyttäminen
- myöhässä olevien huoltojen näyttäminen
- tehdyksi merkitseminen
- poistaminen
- localStorage-tallennus
