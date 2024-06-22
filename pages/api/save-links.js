import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { links } = req.body;

    const filePath = path.join(process.cwd(), "assets", "links.json");
    fs.writeFileSync(filePath, JSON.stringify({ links }, null, 2));

    res.status(200).json({ message: "Links updated successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
