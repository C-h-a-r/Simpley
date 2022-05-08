import arg from 'arg';
import fs from 'fs';
import Gradient from 'gradient-string';
import readline from 'readline';
import ac from 'ansi-colors';
import copy from 'recursive-copy';

let gradient = Gradient([
    {color: '#d42dcfff', pos: 0},
    {color: '#04d9d9ff', pos: 1}
  ]);


  async function logLogo(){
      console.log(gradient(`\n\n\n\n\n\n
      ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────
      ─██████████████─██████████─██████──────────██████─██████████████─██████─────────██████████████─████████──████████─
      ─██░░░░░░░░░░██─██░░░░░░██─██░░██████████████░░██─██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─██░░░░██──██░░░░██─
      ─██░░██████████─████░░████─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─██░░██─────────██░░██████████─████░░██──██░░████─
      ─██░░██───────────██░░██───██░░██████░░██████░░██─██░░██──██░░██─██░░██─────────██░░██───────────██░░░░██░░░░██───
      ─██░░██████████───██░░██───██░░██──██░░██──██░░██─██░░██████░░██─██░░██─────────██░░██████████───████░░░░░░████───
      ─██░░░░░░░░░░██───██░░██───██░░██──██░░██──██░░██─██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─────████░░████─────
      ─██████████░░██───██░░██───██░░██──██████──██░░██─██░░██████████─██░░██─────────██░░██████████───────██░░██───────
      ─────────██░░██───██░░██───██░░██──────────██░░██─██░░██─────────██░░██─────────██░░██───────────────██░░██───────
      ─██████████░░██─████░░████─██░░██──────────██░░██─██░░██─────────██░░██████████─██░░██████████───────██░░██───────
      ─██░░░░░░░░░░██─██░░░░░░██─██░░██──────────██░░██─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░██───────██░░██───────
      ─██████████████─██████████─██████──────────██████─██████─────────██████████████─██████████████───────██████───────
      ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n\n\n\n`))
  }
  async function log(message) {
    console.log(gradient(message))
}

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     

   },
   {
     argv: rawArgs.slice(2),
   }
 );
 return {
   cmd: args._[0]
 };``
}



export async function cli(args) {
 let options = parseArgumentsIntoOptions(args);

 if (!options.cmd) {
     console.clear();
logLogo()

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });







  rl.question(gradient("> What would you like to create    "), async function(input1) {

const possibleAnswers = ['slash']

if (!possibleAnswers.includes(input1)) {
     console.log(gradient("\nPlease enter a valid input"))
     rl.close()
     return;
} else {

    fs.mkdir(`./${input1}`, (err) => {
        if (err) {
            throw err;
        }
    });


    copy(__dirname + `/templates/Slash-Command-Handler`, `./${input1}`, function(error, results) {
        if (error) {
            console.log(gradient("\n\nUnable To Create Files!\n\n"))
        } else {

            console.log(gradient(`\n\nMade ${results.length} files in ${input1}\n`));
            console.log(gradient(`\n\n\nMade by Char#3371 & Rqph_#5551`))
        }
    });
    


    rl.close()
}

  });


 }
 

}