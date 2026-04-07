import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
const JWT_SECRET = "super_secret_key"



//middleware
function auth(req: Request , res: Response , next: Function) {
  const header = req.headers.authorization;
  if (!header) return res.sendStatus(401);

  const token = header.split(" ")[1];
  if (!token) return res.sendStatus(401)

    try {
      const payload = jwt.verify(token, JWT_SECRET);
      (req as any).user = payload;
      next()
    } catch (e) {
      res.sendStatus(403);
    }
} 



// разрешаем запросы с фронта
app.use(cors({
  origin: "http://127.0.0.1:5500"
}));



// чтобы читать JSON из body
app.use(express.json());

const fakeUser = {
    email: "test@mail.com",
    passwordHash: bcrypt.hashSync("1234" , 10)
}


const token = jwt.sign(
  {email : fakeUser.email},
  JWT_SECRET,
  {expiresIn : "15m"}
)



//protected route 
app.get("/api/me" , auth , (req: Request , res: Response)  => {
  res.json( {user: (req as any).user })
})



// test route
app.post("/api/login", async (req: Request, res: Response) => {
  console.log(req.body);
  const { email , password } = req.body
  


  if (email != fakeUser.email) {
    return res.status(401).json({ error: "INVALID_CREDENTIALS"})
  }

  const isValid = await bcrypt.compare(password, fakeUser.passwordHash);

  if (!isValid) {
    return res.status(401).json( {error : "INVALID_CREDENTIALS" })
  }
  res.json({ token })
  res.json({ ok: true });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
