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

## GitHub Pages (produktion)

Deploy sker via GitHub Actions i `.github/workflows/deploy-pages.yml`.

1. Lägg till repository secret: `FIREBASE_API_KEY`
2. Gå till repository Settings → Pages och välj **GitHub Actions** som source
3. Pusha till `main` (eller kör workflow manuellt)

Workflow skapar `firebase-config.js` vid deploy och publicerar sidan utan att nyckeln lagras i git-historiken.

## Säkerhet

Om en tidigare nyckel har legat i git-historiken: rotera/revocera nyckeln i Google Cloud Console och uppdatera sedan `firebase-config.js` med den nya.

Se även `SECURITY_NOTES.md` för incident-playbook och felsökningschecklista.

## Tillgång

Kontakta lagets tränare för inloggningsuppgifter.
