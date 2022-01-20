{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME ?? process.env.USERPROFILE}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.uat.js`);

  const appName = `Archive%20Process`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.99.99.187:17204/?tls=false&replicaSet=AdminAPIUAT&appName=${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.99.99.187:37201/?tls=false&replicaSet=SabaL2UAT&appName=${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.99.99.187:37201/?tls=false&replicaSet=SabaL2UAT&appName=${appName}`},
  ].forEach(createDatabase);

  load(`../../scripts/archive-process/run-archive.js`);

  quit();
}
