const os =require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
// console.log(os.constants);

const SIZE = 1024
function kb(bytes){return bytes/SIZE}
function mb(bytes){return bytes/SIZE}
function gb(bytes){return bytes/SIZE}
// console.log(gb(mb(kb(os.freemem()))));
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname());
console.log(os.networkInterfaces());

