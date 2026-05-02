# ATT3-Projekti

# Huoltojen seuranta

Huoltojen seuranta on selainpohjainen sovellus, jonka avulla käyttäjä voi seurata laitteiden, koneiden tai muiden huoltokohteiden huoltotehtäviä.

Sovellus on tehty ohjelmistoprojektina HTML-, CSS- ja JavaScript-tekniikoilla. Tiedot tallennetaan selaimen localStorageen, joten sovellus toimii ilman palvelinta, tietokantaa tai kirjautumista.

## Kohderyhmä

Sovellus on tarkoitettu yksittäiselle käyttäjälle, esimerkiksi pienen konepajan työntekijälle. Sovellus auttaa muistamaan tulevat ja myöhässä olevat huollot.

## Ongelma

Huollot voivat unohtua helposti, jos ne ovat paperilla, muistissa tai useissa eri järjestelmissä. Tämä sovellus kokoaa huoltokohteet ja huoltotehtävät yhteen näkymään.

## Ominaisuudet

- Huoltokohteen lisääminen
- Huoltotehtävän lisääminen kohteelle
- Huollon päivämäärän asettaminen
- Huollon merkitseminen tehdyksi
- Tulevien huoltojen näyttäminen
- Myöhässä olevien huoltojen näyttäminen
- Huoltokohteen poistaminen
- Huoltotehtävän poistaminen
- Tietojen säilyminen selaimen päivityksen jälkeen localStoragen avulla

## Teknologiat

- HTML
- CSS
- JavaScript
- localStorage

## Projektin rakenne

```text
huoltojen-seuranta/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── docs/
│   ├── suunnitelma.md
│   ├── testaus.md
│   └── kayttoohje.md
└── README.md
