{
  loadServerScripts(api);
  $Summary( active,  active.summary    ).runDailySummary(Date.now() -   24*3600*1000);
  $Summary(archive, archive.summary_arc).runDailySummary(Date.now() - 2*24*3600*1000);
}
