{
  loadServerScripts(api);
  const actSum = $Summary( active,  active.summary    );
  const arcSum = $Summary(archive, archive.summary_arc);
  const anHour = 3600*1000;

  actSum.runHourlySummary(Date.now() -  1 * anHour);
  arcSum.runHourlySummary(Date.now() - 25 * anHour);

  print(`${'='.repeat(100)}\n\n`);
}
