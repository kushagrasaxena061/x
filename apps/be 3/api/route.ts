import { db } from "@repo/common/config";

export default async function handler(req: any, res: any) {
  let { name } = req.body;

  if (!name) {
    res.status(200).json({ success: false });
  }

  await db.user.create({
    data: {
      name,
    },
  });

  res.status(200).json({ success: true });
}
