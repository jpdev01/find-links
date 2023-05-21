import fs from 'fs';
import chalk from 'chalk';

function handleError(error) {
    throw new Error(chalk.red('Falha ao ler arquivo: ', error.code));
}

function findLink(text) {
    const regex = /\(https?:\/\/[^\s?#.].[^\s]*\)/gm

    const result = [...text.matchAll(regex)];
    console.log(result);
}
async function getFile(filePath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding)
        findLink(text);
    } catch (error) {
        handleError(error);
    }

    // fs.promises.readFile(filePath, encoding)
    //     .then(text => console.log(chalk.green(text)))
    //     .catch(handleError);
}

getFile('./arquivos/texto.md');