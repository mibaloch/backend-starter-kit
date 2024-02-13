import crypto, { SHA256 } from "crypto-js";
import { Context } from "koa";
import jwt from "jsonwebtoken";
import logger from "../../../logger";
import { env } from "process";
import { RouterContext } from "koa-router";

namespace UserController {
  export const signUp = async (ctx: RouterContext) => {
    try {

      // let body = ctx.request.body;
      // const secretKey = process.env.SECRET_KEY!;
      // const decryptedBytes = crypto.AES.decrypt(body, secretKey);

      // const decryptedWalletAddress = decryptedBytes.toString(crypto.enc.Utf8);

      // const token = jwt.sign(
      //   { id: "uid_here" },
      //   JSON.stringify(SHA256(process.env.ADMIN_TOKEN!).words),
      //   { expiresIn: "1d" }
      // );

      ctx.body = {
        response: "success",
        data: {},
      };
    } catch (error) {
      logger.error(JSON.stringify(error));

      ctx.status = 500;
      ctx.body = {
        response: "failure",
        error: error,
      };
    }
  };

  export const signIn = async (ctx: Context) => {
    try {
      ctx.body = {
        response: "success",
        data: {},
      };
    } catch (error) {
      logger.error({ error, inputs: ctx.request.body });
      ctx.status = 500;
      ctx.body = {
        response: "failure",
        error: error,
      };
    }
  };
}

export default UserController;
