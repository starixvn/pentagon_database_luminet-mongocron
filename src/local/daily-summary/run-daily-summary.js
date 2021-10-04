{
  loadServerScripts(api);
  const actSum = $Summary( active,  active.summary    );
  const arcSum = $Summary(archive, archive.summary_arc);

  actSum.runDailySummary(Date.now() -   24*3600*1000);
  arcSum.runDailySummary(Date.now() - 2*24*3600*1000);

  for (const h in Array.from(Array(24).keys())) {
    actSum.runHourlySummary(Date.now() -   24*3600*1000 + h*3600*1000);
    arcSum.runHourlySummary(Date.now() - 2*24*3600*1000 + h*3600*1000);
  }
}
