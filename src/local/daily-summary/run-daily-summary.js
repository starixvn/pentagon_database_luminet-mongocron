{
  loadServerScripts(api);
  const actSum = $Summary( active,  active.summary    );
  const arcSum = $Summary(archive, archive.summary_arc);

  const todayH = Math.floor(Date.now / 3600*1000);

  actSum.runDailySummary((todayH - 24) * 3600*1000);
  arcSum.runDailySummary((todayH - 48) * 3600*1000);

  for (const h in Array.from(Array(24).keys())) {
    actSum.runHourlySummary((todayH - 24 + h) * 3600*1000);
    arcSum.runHourlySummary((todayH - 48 + h) * 3600*1000);
  }
}
