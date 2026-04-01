// ═══════════════════════════════════════════════════════════════════════════
// IMPORT AV MATCHER — så här slipper du strul med inklistring i Console
// ═══════════════════════════════════════════════════════════════════════════
//
// ENKLAST (efter att denna version av sidan är deployad):
//   1) Logga in som admin, fliken Matcher
//   2) Klicka "Importera spelprogram (JSON)" och bekräfta
//
// ETT kommando i Console (samma sida, inloggad):
//   await importSeasonMatches()
//
// Om du ändå vill klistra in ett längre skript i Chrome Console:
//   • Klicka först i konsolen, skriv: allow pasting  — tryck Enter
//   • Klistra sedan in skriptet nedan (annars ignoreras ofta inklistringen)
//
// Alternativ: DevTools → Sources → Snippets → + Ny snippet → klistra in → Run
//
// ═══════════════════════════════════════════════════════════════════════════

(async () => {
  console.log('[import] startar…');
  if (typeof importSeasonMatches === 'function') {
    await importSeasonMatches();
    return;
  }
  const matches = [
    { date: '2026-04-18', opponent: 'Ursvik IK Gul', venue: 'home', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Stockhagens IP 2', tid: '11:00' },
    { date: '2026-04-26', opponent: 'Viggbyholms IK FF Vit', venue: 'away', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Hägernäs IP 21', tid: '10:00' },
    { date: '2026-05-02', opponent: 'IFK Lidingö FK 17 blå', venue: 'home', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Stockhagens IP 2', tid: '12:30' },
    { date: '2026-05-10', opponent: 'IFK Lidingö FK 6 blå', venue: 'away', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Bodal 1', tid: '09:00' },
    { date: '2026-05-23', opponent: 'Täby FK 73', venue: 'home', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Stockhagens IP 2', tid: '12:30' },
    { date: '2026-05-31', opponent: 'Norrtulls SK Vit 1', venue: 'away', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Bellevue BP 1', tid: '11:45' },
    { date: '2026-06-06', opponent: 'Täby FK 21', venue: 'home', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Stockhagens IP 2', tid: '11:00' },
    { date: '2026-08-21', opponent: 'Karlbergs BK Gul', venue: 'away', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Kristinebergs IP 2', tid: '18:45' },
    { date: '2026-08-29', opponent: 'Sollentuna FK City 2', venue: 'home', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Stockhagens IP 2', tid: '12:30' },
    { date: '2026-09-05', opponent: 'Djurgårdens IF FF 11 Blå', venue: 'away', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Östermalms IP 2', tid: '16:30' },
    { date: '2026-09-12', opponent: 'Sundbybergs IK Vit', venue: 'home', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Stockhagens IP 2', tid: '12:30' },
    { date: '2026-09-20', opponent: 'Österåker United FK 2 Svart', venue: 'away', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Åkersberga IP 21', tid: '09:00' },
    { date: '2026-09-26', opponent: 'Erikslunds KF Vit', venue: 'home', type: 'S:t Erikscupen', lag: 'Gul', plan: 'Stockhagens IP 2', tid: '11:00' },
    { date: '2026-04-19', opponent: 'FC Djursholm Turkos', venue: 'away', type: 'S:t Erikscupen', lag: 'Svart', plan: 'Djursholms IP 31', tid: '16:00' },
    { date: '2026-04-25', opponent: 'IFK Lidingö FK 8', venue: 'home', type: 'S:t Erikscupen', lag: 'Svart', plan: 'Stockhagens IP 2', tid: '12:30' },
    { date: '2026-05-09', opponent: 'IFK Lidingö FK 17 blå', venue: 'away', type: 'S:t Erikscupen', lag: 'Svart', plan: 'Bodal 1', tid: '09:00' },
    { date: '2026-08-22', opponent: 'Täby FK 31', venue: 'home', type: 'S:t Erikscupen', lag: 'Svart', plan: 'Stockhagens IP 2', tid: '11:00' },
    { date: '2026-09-06', opponent: 'Djurgårdens IF FF 12 Blå', venue: 'away', type: 'S:t Erikscupen', lag: 'Svart', plan: 'Östermalms IP 3', tid: '11:30' },
    { date: '2026-09-19', opponent: 'Kälvesta IoF P2015 Röd', venue: 'home', type: 'S:t Erikscupen', lag: 'Svart', plan: 'Stockhagens IP 2', tid: '11:00' },
  ];
  try {
    const { getFirestore, collection, addDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const { getApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const db = getFirestore(getApp());
    const col = collection(db, 'matches');
    let ok = 0;
    for (const m of matches) {
      await addDoc(col, {
        opponent: m.opponent,
        date: m.date,
        venue: m.venue,
        type: m.type,
        notes: m.lag + ' · ' + m.tid + ' · ' + m.plan,
        lag: m.lag || null,
        goalsFor: null,
        goalsAgainst: null,
        scorers: [],
        lineup: null,
      });
      ok++;
      console.log('✓ (' + ok + '/' + matches.length + ') ' + m.date + ' ' + m.opponent);
    }
    console.log('✅ Klart! ' + ok + ' matcher importerade.');
  } catch (e) {
    console.error('[import] misslyckades:', e);
    console.info('Uppdatera sidan till senaste versionen och använd knappen "Importera spelprogram", eller skriv allow pasting i konsolen och försök igen.');
  }
})();
