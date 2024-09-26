const fs = require('fs');
const { Command } = require ('commander');
const program = new Command();

program
.name('counter')
.description('CLI to read the file')
.version('0.8.0');

program
.command('count')
.description('counts the words in a file')
.argument('<file>','file to count the words from')
.action((file)=>{
    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err){
            console.log("The Error is",err);
        }
        else{
            const words = data.split(" ").length;
            console.log(`There are ${words} words in the ${file} file`);
        }
    })
});

program.parse();