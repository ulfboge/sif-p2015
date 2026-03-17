# Security Notes

Kort checklista för säker drift av `sif-p2015`.

## Vid nyckelläcka (incident playbook)

1. Bekräfta läckan (GitHub secret scanning alert eller manuell upptäckt).
2. Rotera API-nyckeln i Google Cloud Console.
3. Begränsa nyckeln:
   - `Application restrictions`: `HTTP referrers`
   - Tillåt minst: `https://ulfboge.github.io/*`
   - Ev. lokal test: `http://localhost:*/*`
   - `API restrictions`: endast nödvändiga API:er (t.ex. Identity Toolkit API, Cloud Firestore API).
4. Uppdatera GitHub repository secret `FIREBASE_API_KEY`.
5. Kör workflow `Deploy GitHub Pages`.
6. Verifiera appen:
   - inloggning fungerar
   - matcher läses/sparas korrekt
7. Radera/revocera gamla nyckeln.
8. Markera GitHub-alerten som resolved.

## Normal drift

- GitHub Pages ska använda `build_type: workflow` (inte legacy branch deploy).
- `firebase-config.js` ska inte committas.
- Nycklar lagras i GitHub Actions secrets, inte i repo-filer.

## Snabb felsökning

- Symptom: "Inloggning ej tillgänglig just nu" eller tom matchlista
  - Kontrollera att `FIREBASE_API_KEY` finns i repo secrets.
  - Kontrollera senaste körning av `Deploy GitHub Pages`.
  - Kontrollera att `https://ulfboge.github.io/sif-p2015/firebase-config.js` inte ger 404.

