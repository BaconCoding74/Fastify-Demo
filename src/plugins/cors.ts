import { FastifyPluginAsync } from "fastify";
import cors from "@fastify/cors";

const corsPlugin: FastifyPluginAsync = async(fastify) => {
    fastify.register(cors, { origin: "*" });
};

export default corsPlugin;