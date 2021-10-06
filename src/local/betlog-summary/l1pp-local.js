{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME ?? process.env.USERPROFILE}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.local.js`);

  const appName = `Summary%20BetLog`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.10.50.12:17104,10.10.50.13:17104,10.10.50.14:17104/?tls=false&replicaSet=AdminAPI&appName=${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.10.50.14:27105/?tls=false&replicaSet=L1ppLocal&appName=${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.10.50.14:27105/?tls=false&replicaSet=L1ppLocal&appName=${appName}%20Archive`},
  ].forEach(createDatabase);

  load(`run-betlog-summary.js`);
}
