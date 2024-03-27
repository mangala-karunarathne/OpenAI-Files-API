import openai from "./openaiConfig.js";

async function main(){

    const deletedFile = await openai.files.del("file-1bmD9YN9SdzfwJxE2lgqlMaX");

    console.log(deletedFile);

}

main();