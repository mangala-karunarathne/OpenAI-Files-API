import openai from "./openaiConfig.js";

async function main(){
    const file = await openai.files.retrieve("file-tOi8nRvI8WGDDxzz2HbktL8Z");

    console.log(file);
}

main();