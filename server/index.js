const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
  key: "userID",
  secret: "whatDoesThisEvenDo",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 600000,
    secure: false
  }
}))

// Routers
const homeRouter = require("./routes/home");
app.use("/", homeRouter);

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

const bookRouter = require("./routes/book");
app.use("/book",bookRouter);

// const bookidRouter = require("./routes/bookid");
// app.use("/bookid",bookidRouter);

const searchRouter = require("./routes/Search");
app.use("/search", searchRouter);
//订单界面

const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

const registerRouter = require("./routes/register");
app.use("/register", registerRouter);

const orderRouter = require("./routes/order");
app.use("/order", orderRouter);

const cartRouter = require("./routes/cart");
app.use("/cart", cartRouter);

app.listen(3001, () => {
   console.log("Server running on port 3001");
 });
