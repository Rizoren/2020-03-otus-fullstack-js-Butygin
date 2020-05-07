const http = require('http');
const url = "http://127.0.0.1:3001";

let simple = (url) => new Promise((resolve, reject) => {
    http.get(url, response =>
        response.on('data',() => {})
                .on('end', () => resolve())
    ).on("error", () => reject());
});

async function executor (arg) {
    for (let i = 0; i < Number(arg[2]); i++) {
        if (arg[3] === 'p')
            simple(url).then(() => console.log(new Date()));
        else if (arg[3] === 'c')
            await simple(url).then(() => console.log(new Date()));
    }
}

executor(process.argv).then();
