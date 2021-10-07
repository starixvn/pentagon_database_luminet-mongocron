{
  loadServerScripts(api);

  const anHour = 3600*1000;
  const tohour = Math.floor(Date.now() / anHour);

  /** Process raw bets log */
  const actBL = $BetLog(active.log.bets, active.Proteus.betlogs);
  const arcBL = $BetLog(archive.log_arc.bets_bk, archive.Proteus.betlogs_bk);

  if (actBL) actBL.processAll(10000, 1);
  if (arcBL) arcBL.processAll(10000, 2);

  /** BetLog Summary is hourly
   *  - Always run for this hour
   *  - Last hour is run if minutes in 0..4 to prevent incomplete summary
   *  - Always run for last hour in archive
   */
  const actBLS = $BetLogSummary(active.Proteus.betlogs, active.summary.betlog_summaries);
  const arcBLS = $BetLogSummary(archive.Proteus.betlogs_bk, archive.summary_arc.betlog_summaries);

  actBLS.runSummary(tohour * anHour);
  if (ISODate().getUTCMinutes() < 5) actBLS.runSummary((tohour - 1) * anHour);

  arcBLS.runSummary(tohour * anHour);
  arcBLS.runSummary((tohour - 1) * anHour);

  print(`${'='.repeat(100)}\n\n`);
}
