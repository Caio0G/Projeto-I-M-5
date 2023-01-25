import inquirer from 'inquirer';

async function questions() {
     let out = false;
     let listproperty = ['color', 'width', 'border', 'font-size', 'display', 'media', 'float', 'transition', 'animation', 'flex-container'];
     while ( out === false ) {
          let answers  = await inquirer.prompt([
               {
                    name: "propertiescss",
                    type: "input",
                    message: "Digite uma propriedade CSS:"
               },
          ]);
          if (answers.propertiescss == "sair" || answers.propertiescss == "SAIR"){
               out = true;
               listproperty.sort((a, b) => {
                    return a.localeCompare(b);
               });
               listproperty.forEach((property) => console.log(property));
          } else {
               listproperty.push(answers.propertiescss); 
  } 
                    
 }
 


}
questions();