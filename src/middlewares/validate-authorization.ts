import { Next } from "koa";
import { RouterContext } from "koa-router";

export const validateAuthorization = (
  ctx: RouterContext,
  next: Next,
) => {
  next();
};
