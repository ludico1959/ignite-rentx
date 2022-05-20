import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    // stat verifica se um arquivo existe ou não no diretório que for passado
    await fs.promises.stat(filename);
  } catch {
    // se não existir arquivo, é gerado um erro pelo stat e apenas é feito um retono da função
    return;
  }

  // unlink apaga o arquivo do diretório
  await fs.promises.unlink(filename);
};
