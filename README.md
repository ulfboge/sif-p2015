# Stocksunds IF – P2015

Laguppställning och matchhistorik för Stocksunds IF pojkar födda 2015.

🔗 **[Öppna sidan](https://ulfboge.github.io/sif-p2015)**

## Funktioner

- Schematisk plan med drag och släpp (eller tryck-och-placera i mobilen)
  - **7 mot 7:** formationerna 2-3-1 och 1-4-1, 5 avbytare
  - **9 mot 9:** formationerna 3-3-2, 3-2-3 och 2-4-2, 7 avbytare
- Matchhistorik med resultat, målgörare, assist, insläppta mål per period och sparade laguppställningar
- **Matchdag:** nästa match visas överst med nedräkning till avspark (fyll i "Avspark" på matchen)
- **Matchkontroll:** liveresultat med klocka som syns för alla på sidan
- Statistik per säsong, spelform, antal spelare (7/9), lag och turnering
- **Säsongssammanfattning** med lagfokus och delbar länk (`#sasong-ÅÅÅÅ`)
- "Tack för säsongen" visas överst efter säsongens sista match, fram till nästa säsongs första matchdag
- **Trupp** redigeras i admin-vyn (Firestore `config/roster`). Spelare som slutar markeras som inaktiva och statistiken ligger kvar
- **Backup:** ladda ner alla matcher och truppen som JSON från admin-vyn
- Inloggning krävs för att redigera, men alla kan se

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

## Firestore-regler

Samlingarna `matches` och `config` ska vara läsbara för alla och skrivbara för inloggade:

```
match /matches/{matchId} { allow read: if true; allow write: if request.auth != null; }
match /config/{docId}    { allow read: if true; allow write: if request.auth != null; }
```

## Säkerhet

Om en tidigare nyckel har legat i git-historiken: rotera/revocera nyckeln i Google Cloud Console och uppdatera sedan `firebase-config.js` med den nya.

Se även `SECURITY_NOTES.md` för incident-playbook och felsökningschecklista.

## Tillgång

Kontakta lagets tränare för inloggningsuppgifter.
