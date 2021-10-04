{
  loadServerScripts(api);
  $Summary( active,  active.summary    ).runHourlySummary(Date.now() -  1*3600*1000);
  $Summary(archive, archive.summary_arc).runHourlySummary(Date.now() - 25*3600*1000);
}
