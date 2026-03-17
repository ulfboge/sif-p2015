# Stocksunds IF – P2015

Laguppställning och matchhistorik för Stocksunds IF pojkar födda 2015.

🔗 **[Öppna sidan](https://ulfboge.github.io/sif-p2015)**

## Funktioner

- Schematisk 7-mot-7-plan med drag och släpp
- Spelare placeras som back, defensiv mittfältare, mittfältare eller forward
- Avbytarbänk med 5 platser
- Matchhistorik med resultat, målgörare och sparade laguppställningar
- Inloggning krävs för att redigera – alla kan se

## Teknik

Ensidig HTML-app med Firebase Firestore som databas och Firebase Authentication för inloggning. Ingen byggprocess – fungerar direkt via GitHub Pages.

## Lokal konfiguration

För att undvika att exponera nycklar i repot läses Firebase-konfiguration från en lokal fil:

1. Kopiera `firebase-config.example.js` till `firebase-config.js`
2. Lägg in korrekt Firebase `apiKey` i `firebase-config.js`
3. Lämna `firebase-config.js` ocommittad (filen är ignorerad via `.gitignore`)

Vid publicering behöver motsvarande fil finnas på hosten.

## Säkerhet

Om en tidigare nyckel har legat i git-historiken: rotera/revocera nyckeln i Google Cloud Console och uppdatera sedan `firebase-config.js` med den nya.

## Tillgång

Kontakta lagets tränare för inloggningsuppgifter.
