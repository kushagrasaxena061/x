import express, { Request, Response } from "express";
import { db } from "@repo/common/config";

const app = express();

app.use(express.json());

// Define routes
app.get("/api", async (req: Request, res: Response) => {
  try {
    const users = await db.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api", async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newUser = await db.user.create({
      data: { name },
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3013;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
