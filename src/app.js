import express from "express";
import cors from "cors";
import { getProducts } from "./controllers/products.js";
import signUp from "./controllers/sign-up.js";
import login from "./controllers/login.js";
import { addProductToCard, getCartProducts } from "./controllers/cart.js";
import { auth } from "./middlewares/auth.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/products", getProducts);

app.post("/login", login);

app.post("/signup", signUp);

app.post("/cart", auth, addProductToCard);

app.get("/cart", auth, getCartProducts);

export default app;
