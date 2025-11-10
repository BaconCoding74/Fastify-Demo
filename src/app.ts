import Fastify from "fastify";
import corsPlugin from "./plugins/cors";
import dbPlugin from "./plugins/db";

const app = Fastify({
    logger: true,
});

app.register(corsPlugin);
app.register(dbPlugin);

export default app;
