import openai from "./openaiConfig.js";
import fs from "fs";

async function main(){
    const file_upload_response = await openai.files.create({
        file : fs.createReadStream("testfile.txt"), // change file name here to upload
        // purpose: "fine-tune" // for upload translated file
        purpose: "assistants" // for upload a file to be translated
    })

    console.log(file_upload_response);
}

main();