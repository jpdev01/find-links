import fs from 'fs';
import chalk from 'chalk'; //es6 preferir assim que require(x)

function handleError(error) {
    throw new Error(chalk.red('Falha ao ler arquivo: ', error.code));
}

async function getFile(filePath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding)
        console.log(chalk.green(text));
    } catch (error) {
        handleError(error);
    }

    // fs.promises.readFile(filePath, encoding)
    //     .then(text => console.log(chalk.green(text)))
    //     .catch(handleError);
}

getFile('./arquivos/texto.md');