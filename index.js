var Etcd = require('node-etcd');
var etcd = new Etcd();

console.log('Running');

etcd.set("Foobar", "Bazzer");
etcd.get("Foobar", console.log);