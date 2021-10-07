{
  loadServerScripts(api);

  const anHour = 3600*1000;
  const tohour = Math.floor(Date.now() / anHour);

  /** Hourly Summary is hourly
   *  - Always run for this hour
   *  - Last hour is run if minutes in 0..4 to prevent incomplete summary
   *  - Archive time is shifted -1 days
   *  - Always run for last hour in archive
   */
  const actSum = $Summary( active,  active.summary    );
  const arcSum = $Summary(archive, archive.summary_arc);

  actSum.runHourlySummary(tohour * anHour);
  if (ISODate().getUTCMinutes() < 5) actSum.runHourlySummary((tohour - 1)  * anHour);

  arcSum.runHourlySummary((tohour - 24) * anHour);
  arcSum.runHourlySummary((tohour - 25) * anHour);

  print(`${'='.repeat(100)}\n\n`);
}
