import { Router } from "express";
import { contactMe } from "../controller/maincontroller.js";

const routes = Router();
routes.post("/contact-me", contactMe);

export default routes;
