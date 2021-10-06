{
  loadServerScripts(api);

  const anHour = 3600*1000;
  const tohour = Math.floor(Date.now() / anHour);

  const actBL = $BetLog(active.log.bets, active.Proteus.betlogs);
  if (actBL) actBL.processAll(10000, 1);
  const actBLS = $BetLogSummary(active.Proteus.betlogs, active.summary.betlog_summaries);
  if (ISODate().getMinutes() < 5) actBLS.runSummary((tohour - 1) * anHour);
  actBLS.runSummary(tohour * anHour);

  const arcBL = $BetLog(archive.log_arc.bets_bk, archive.Proteus.betlogs_bk);
  if (arcBL) arcBL.processAll(10000, 2);
  const arcBLS = $BetLogSummary(archive.Proteus.betlogs_bk, archive.summary_arc.betlog_summaries);
  arcBLS.runSummary((tohour - 1) * anHour);
  arcBLS.runSummary(tohour * anHour);

  print(`${'='.repeat(100)}\n\n`);
}
