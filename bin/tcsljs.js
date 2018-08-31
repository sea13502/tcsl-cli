var program = require('commander')

program
  .command("adminlte","generate a new adminlte project")
  .parse(process.argv)