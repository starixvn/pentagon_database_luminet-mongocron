{
  const cwd = process.cwd();
  process.chdir(`${process.env.HOME ?? process.env.USERPROFILE}/mongoshrc`);
  load(`.mongoshrc.nodb.js`);

  process.chdir(cwd);
  load(`.auth.local.js`);

  const appName = `Archive%20Process`;
  [
    {env: `admin` , name: `api`     , auth: null, uri: `mongodb://10.10.50.13:17104,10.10.50.14:17104,10.18.200.80:17104/?tls=false&replicaSet=AdminAPI&appName=${appName}`},
    {env: `biz`   , name: `active`  , auth: null, uri: `mongodb://10.10.50.14:27104/?tls=false&replicaSet=L1pLocal&appName=appName=${appName}`},
    {env: `biz`   , name: `archive` , auth: null, uri: `mongodb://10.10.50.14:27104/?tls=false&replicaSet=L1pLocal&appName=${appName}`},
  ].forEach(createDatabase);

  load(`../../scripts/archive-process/run-archive.js`);
}
