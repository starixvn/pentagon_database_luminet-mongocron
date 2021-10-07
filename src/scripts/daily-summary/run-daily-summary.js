{
  loadServerScripts(api);

  const anHour = 3600*1000;
  const todayH = Math.floor(Date.now() / 24 / anHour) * 24;

  /** Daily Summary is daily
   *  - Always run for today in active
   *  - Yesterday in active is run if hours in 0..2 to prevent incomplete summary
   *  - Always run for yesterday and the day before yesterday in archive
   *  
   */
  const actSum = $Summary( active,  active.summary    );
  const arcSum = $Summary(archive, archive.summary_arc);

  actSum.runDailySummary(todayH * anHour);
  if (ISODate().getUTCHours() < 3) actSum.runDailySummary((todayH - 24) * anHour);

  arcSum.runDailySummary((todayH - 24) * anHour);
  arcSum.runDailySummary((todayH - 48) * anHour);

  print(`${'='.repeat(100)}\n\n`);
}
