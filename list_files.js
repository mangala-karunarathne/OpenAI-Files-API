import openai from "./openaiConfig.js";

async function main(){

    // Get the List of all files
    // const uploadedFiles = await openai.files.list(); 

    // Get the List of  files with purpose of "assistants"
    const uploadedFiles = await openai.files.list({
        purpose: "assistants"
    }); 

    console.log(uploadedFiles);

}

main();