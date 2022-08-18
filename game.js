import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const number = Math.floor(Math.random() * 100);
const recurAsking = function () {
	rl.question('Загадано число от 0 до 100\n', (answer) => {
		if(answer === 'exit') {
		  return rl.close();
		}
        if(isNaN(Number(answer))) {
  	      console.log('Ошибка! Введено не число!');
  	      return rl.close();
        } else  {
        	if(Number(answer) !== number) {
		      const respond = number > Number(answer) ? 'Больше' : 'Меньше';
		      console.log(respond);
		      recurAsking();
		    } else {
		    	console.log('Число отгадано!');
		    	return rl.close();
		    }
        }
    })
};

recurAsking();
