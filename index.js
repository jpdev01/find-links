import fs from 'fs';
import chalk from 'chalk'; //es6 preferir assim que require(x)

function handleError(error) {
    throw new Error(chalk.red('Falha ao ler arquivo: ', error.code));
}

function getFile(filePath) {
    const encoding = 'utf-8';

    return fs.readFile(filePath, encoding, (error, text) => {
        if (error) handleError(error);

        console.log(chalk.green(text));
    });
}

getFile('./arquivos/texto.md');