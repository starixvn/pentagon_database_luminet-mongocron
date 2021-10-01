{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.local.js`);

  const appName = `appName=Summary%20Daily`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.10.50.12:17104,10.10.50.13:17104,10.10.50.14:17104/?tls=false&replicaSet=AdminAPI&${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.10.50.13:37101/?tls=false&replicaSet=L2Local&${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.10.50.13:37101/?tls=false&replicaSet=L2Local&${appName}`},
  ].forEach(createDatabase);

  load(`run-daily-summary.js`);
}
