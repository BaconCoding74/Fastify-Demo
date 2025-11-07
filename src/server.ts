import dotenv from "dotenv";
dotenv.config();

import config from "./config";
import app from "./app";

app.listen({port: config.app.port}, (err, add) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
})