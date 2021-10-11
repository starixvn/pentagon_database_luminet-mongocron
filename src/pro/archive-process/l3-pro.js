{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME ?? process.env.USERPROFILE}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.l3.js`);

  const appName = `Archive%20Process`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.99.99.187:17104,10.99.99.53:17104,10.99.99.54:17104/?tls=false&replicaSet=AdminAPI&appName=${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.99.99.53:47101,10.99.99.54:47102,10.99.99.187:47103/?tls=false&replicaSet=L3_SabaMain&appName=${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.99.99.54:47151/?tls=false&replicaSet=L3_SabaArc&appName=${appName}`},
  ].forEach(createDatabase);

  load(`../../scripts/archive-process/run-archive.js`);
}
