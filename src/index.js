import fs from 'fs';
import chalk from 'chalk';

function handleError(error) {
    throw new Error(chalk.red('Falha ao ler arquivo: ', error.code));
}

function findLink(text) {
    const regex = /\(https?:\/\/[^\s?#.].[^\s]*\)/gm

    const resultList = [...text.matchAll(regex)];
    const formattedResult = resultList.map(result =>
        ({
            [result[1]]: result[2]
        })
    );
    return formattedResult;
}

async function getFile(filePath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding)

        const result = findLink(text);
        return result;
    } catch (error) {
        handleError(error);
    }

    // fs.promises.readFile(filePath, encoding)
    //     .then(text => console.log(chalk.green(text)))
    //     .catch(handleError);
}

export default getFile;