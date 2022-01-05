export default {
    functionlist:[{
        "n": "SUMIF",
        "t": 0,
        "d": "Retourneert een voorwaardelijke som over een bereik.",
        "a": "Een voorwaardelijke som over een bereik.",
        "m": [2, 3],
        "P": [{
            "name": "bereik",
            "detail": "Het bereik dat wordt getoetst aan `criterium`.",
            "example": "A1:A10",
            "require": "m",
            "repeat": "n",
            "type": "range"
        }, {
            "name": "criterium",
            "detail": "Het patroon of de test die moet worden toegepast op `bereik`.",
            "example": "\">20\"",
            "require": "m",
            "repeat": "n",
            "type": "rangeall"
        }, {
            "name": "sum_range",
            "detail": "Het op te tellen bereik, indien verschillend van `bereik`.",
            "example": "B1:B10",
            "require": "o",
            "repeat": "n",
            "type": "bereik"
        }]
    }, {
        "n": "TAN",
        "t": 0,
        "d": "Retourneert de tangens van een hoek in radialen.",
        "a": "Tangens van een hoek in radialen.",
        "m": [1, 1],
        "P": [{
            "name": "hoek",
            "detail": "De hoek waarvan de raaklijn moet worden bepaald, in radialen.",
            "example": "45*PI()/180",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "TANH",
        "t": 0,
        "d": "Retourneert de hyperbolische tangens van een reëel getal.",
        "a": "Hyperbolische tangens van een reëel getal.",
        "m": [1, 1],
        "P": [{
            "name": "waarde",
            "detail": "Elke reële waarde om de hyperbolische tangens van te berekenen.",
            "example": "A2",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "PLAFOND",
        "t": 0,
        "d": "Rondt een getal naar boven af ​​op het dichtstbijzijnde gehele veelvoud van de gespecificeerde significantie `factor`.",
        "a": "Rondt getal naar boven af ​​op het dichtstbijzijnde veelvoud van een factor.",
        "m": [2, 2],
        "P": [{
            "name": "waarde",
            "detail": "De waarde die naar boven moet worden afgerond op het dichtstbijzijnde gehele veelvoud van `factor`.",
            "example": "23.25",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }, {
            "name": "factor",
            "detail": "Het getal op wiens veelvouden de `waarde` wordt afgerond.",
            "example": "0.1",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "ATAN",
        "t": 0,
        "d": "Retourneert de inverse tangens van een waarde, in radialen.",
        "a": "Inverse tangens van een waarde, in radialen.",
        "m": [1, 1],
        "P": [{
            "name": "waarde",
            "detail": "De waarde waarvoor de inverse tangens moet worden berekend.",
            "example": "0",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "ASINH",
        "t": 0,
        "d": "Retourneert de inverse sinus hyperbolicus van een getal.",
        "a": "Inverse sinus hyperbolicus van een getal.",
        "m": [1, 1],
        "P": [{
            "name": "waarde",
            "detail": "De waarde waarvoor de inverse sinus hyperbolicus moet worden berekend.",
            "example": "0.9",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "ABS",
        "t": 0,
        "d": "Retourneert de absolute waarde van een getal.",
        "a": "Absolute waarde van een getal.",
        "m": [1, 1],
        "P": [{
            "name": "waarde",
            "detail": "Het getal waarvan de absolute waarde moet worden geretourneerd.",
            "example": "-2",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "ACOS",
        "t": 0,
        "d": "Retourneert de inverse cosinus van een waarde, in radialen.",
        "a": "Inverse cosinus van een waarde, in radialen.",
        "m": [1, 1],
        "P": [{
            "name": "waarde",
            "detail": "De waarde waarvoor de inverse cosinus moet worden berekend. Moet tussen `-1` en `1` liggen, inclusief.",
            "example": "0",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "ACOSH",
        "t": 0,
        "d": "Retourneert de inverse cosinus hyperbolicus van een getal.",
        "a": "Inverse cosinus hyperbolicus van een getal.",
        "m": [1, 1],
        "P": [{
            "name": "waarde",
            "detail": "De waarde waarvoor de inverse cosinus hyperbolicus moet worden berekend. Moet groter zijn dan of gelijk zijn aan '1'.",
            "example": "2",
            "require": "m",
            "repeat": "n",
            "type": "bereiknummer"
        }]
    }, {
        "n": "SINH",
        "t": 0,
        "d": "Retourneert de faculteit van de som van de waarden gedeeld door het product van de faculteiten van de waarden.",