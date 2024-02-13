import { validateAuthorization } from "../../middlewares/validate-authorization";
import UserController from "./user-controller";
import koaRouter from "koa-router";

export const userRouter = new koaRouter();

userRouter.post("/sign-in", validateAuthorization, UserController.signIn);
userRouter.post("/sign-up", UserController.signUp);
userRouter.get("/", UserController.signUp);
