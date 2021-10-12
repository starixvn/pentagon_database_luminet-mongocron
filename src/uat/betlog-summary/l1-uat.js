{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME ?? process.env.USERPROFILE}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.uat.js`);

  const appName = `Summary%20BetLog`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.99.99.187:17204/?tls=false&replicaSet=AdminAPIUAT&appName=${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.99.99.187:27201/?tls=false&replicaSet=SabaUAT&appName=${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.99.99.187:27201/?tls=false&replicaSet=SabaUAT&appName=${appName}`},
  ].forEach(createDatabase);

  load(`../../scripts/betlog-summary/run-betlog-summary.js`);
}
