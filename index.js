var Etcd = require('node-etcd');

var etcd = new Etcd('127.0.0.1', '4001');

console.log('Running');

etcd.set("Foobar", "Bazzer", console.log);
etcd.get("Foobar", console.log);