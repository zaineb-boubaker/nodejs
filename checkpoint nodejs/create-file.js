const fs = require("fs");
const path = require("path");


const foldername = "files";
const filename = "welcome.txt";
const content = "Hello Node";

fs.mkdir(foldername, { recursive: true }, (err) => {
    if (err) { console.error("There was an error creating file", err) }
    else {
        console.log("file was created successfully");
    
const filepath = path.join(foldername, filename);

fs.writeFile(filepath, content, (err) => {
    if (err) { console.error("There was an error writing to file", err) }
    else { console.log("writing to file was done successfully") }
});
    }

   
});
