# Sovelluksen suunnitelma

## Sovelluksen nimi

Huoltojen seuranta

## Tarkoitus

Sovelluksen tarkoitus on auttaa käyttäjää seuraamaan laitteiden, koneiden tai muiden kohteiden huoltoja.

Käyttäjä voi lisätä huoltokohteita, lisätä kohteille huoltotehtäviä, asettaa huolloille päivämäärät ja merkitä huollot tehdyiksi.

## Kohderyhmä

Sovellus on suunnattu yksittäiselle käyttäjälle, esimerkiksi pienen konepajan työntekijälle.

Käyttäjä tarvitsee yksinkertaisen työkalun, jolla hän voi seurata koneiden ja laitteiden huoltoja ilman erillistä järjestelmää.

## Nykyinen ongelma

Huollot unohtuvat helposti, jos ne ovat paperilla, muistissa tai eri järjestelmissä. Tämä voi aiheuttaa sen, että koneita tai laitteita ei huolleta ajoissa.

## Ratkaisu

Ratkaisuna toteutetaan selainpohjainen sovellus, jossa käyttäjä voi hallita huoltokohteita ja niihin liittyviä huoltotehtäviä.

Sovellus näyttää käyttäjälle:

- kaikki huoltokohteet
- kohteiden huoltotehtävät
- tulevat huollot
- myöhässä olevat huollot

## Rajaukset

Sovellus on rajattu yksinkertaiseksi selainpohjaiseksi sovellukseksi.

Sovellukseen ei toteuteta:

- kirjautumista
- palvelinta
- tietokantaa
- käyttäjähallintaa
- monen käyttäjän toimintoja

Tiedot tallennetaan vain käyttäjän selaimeen localStoragen avulla.

## Käytettävät teknologiat

- HTML
- CSS
- JavaScript
- localStorage

## Tiedostorakenne

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
