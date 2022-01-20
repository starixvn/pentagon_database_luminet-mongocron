{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME ?? process.env.USERPROFILE}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.l1.js`);

  const appName = `Summary%20Hourly`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.99.99.187:17104,10.99.99.53:17104,10.99.99.54:17104/?tls=false&replicaSet=AdminAPI&appName=${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.99.99.54:27101,10.99.99.53:27102,10.99.99.187:27103/?tls=false&replicaSet=SabaMain&appName=${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.99.99.53:27151/?tls=false&replicaSet=L1_SabaArc&appName=${appName}`},
  ].forEach(createDatabase);

  load(`../../scripts/hourly-summary/run-hourly-summary.js`);

  process.exit();
}
