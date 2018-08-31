const program = require('commander')
const path = require('path')
const Metalsmith = require('metalsmith');

program
  .usage('<project-name>')

program.on('--help', function () {
  console.log('generate a new project')
})

const metalsmithe = Metalsmith(process.cwd());
program.parse(process.argv)

metalsmithe
  .source(path.join(__dirname,'../template/standard'))
  .destination(program.args[0])
  .build(function(err) {      
    if (err) throw err;
  });

console.log(process.cwd());
console.log(path.resolve('./'));
console.log(path.relative('../../', process.cwd()));
console.log(path.relative('../', process.cwd()));
console.log(program.args);
console.log(__dirname);
console.log(path.join(__dirname,'../template/standard'));
console.log(__filename);