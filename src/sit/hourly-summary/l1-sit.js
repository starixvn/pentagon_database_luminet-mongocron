{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME ?? process.env.USERPROFILE}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.sit.js`);

  const appName = `Summary%20Hourly`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.99.99.187:17304/?tls=false&replicaSet=AdminAPISIT&appName=${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.99.99.187:27301/?tls=false&replicaSet=SabaSIT&appName=${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.99.99.187:27301/?tls=false&replicaSet=SabaSIT&appName=${appName}`},
  ].forEach(createDatabase);

  load(`../../scripts/hourly-summary/run-hourly-summary.js`);
}
