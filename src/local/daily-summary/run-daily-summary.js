{
  loadServerScripts(api);
  const actSum = $Summary( active,  active.summary    );
  const arcSum = $Summary(archive, archive.summary_arc);
  const anHour = 3600*1000;
  const todayH = Math.floor(Date.now() / 24 / anHour) * 24;

  actSum.runDailySummary((todayH - 24) * anHour);
  arcSum.runDailySummary((todayH - 48) * anHour);

  for (let h = 0; h < 24; h++) {
    actSum.runHourlySummary((todayH - 24 + h) * anHour);
    arcSum.runHourlySummary((todayH - 48 + h) * anHour);
  }
}
