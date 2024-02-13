require("dotenv").config();
("use strict");
import koaRouter from "koa-router";
import koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
// import { router } from "./app/routes";

import path from "path";
import render from "koa-ejs";
import serve from "koa-static";
import logger from "./logger";
import { connectDB } from "./src/configs/database";
import { initializeCronJobs } from "./src/configs/cron-jobs";
import { initializeSocket } from "./src/configs/socket";
import { loadBlockchain } from "./src/utils/blockchain";
import BlockchainConstants from "./src/constants/blockchain";
import { userRouter } from "./src/features/user/user-routes";

const app = new koa();

app.use(cors());
app.use(bodyParser());

const server = app.listen(process.env.PORT, () =>
  logger.info(`Server has started. http://localhost:${process.env.PORT}`)
);

connectDB();
initializeCronJobs();
initializeSocket(server);

app.use(serve(path.join(__dirname, "./static")));

loadBlockchain(BlockchainConstants.RPC[5], 5);

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
