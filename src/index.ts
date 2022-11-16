import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { router } from "./routes/blog";
const app = express();
const port = 3000;

//Handle bars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// app.use(express.static(path.join(__dirname, "static")));
app.use("/", router);

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
