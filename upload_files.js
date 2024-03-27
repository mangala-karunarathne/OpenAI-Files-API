import openai from "./openaiConfig.js";
import fs from "fs";

async function main(){
    const file_upload_response = await openai.files.create({
        file : fs.createReadStream("assistant_queries.txt"),
        purpose: "assistants"
    })

    console.log(file_upload_response);
}

main();