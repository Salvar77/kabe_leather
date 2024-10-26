import { google } from "googleapis";
import path from "path";
import { promises as fs } from "fs";

// Ścieżka do Twojego pliku JSON z danymi logowania
const KEYFILEPATH = path.join(process.cwd(), "client_secret_API.json");
const SCOPES = ["https://www.googleapis.com/auth/business.manage"];

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Załaduj dane logowania
      const keyFileContent = await fs.readFile(KEYFILEPATH);
      const auth = new google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes: SCOPES,
      });

      const client = await auth.getClient();
      const mybusiness = google.mybusiness({ version: "v4", auth: client });

      const { postContent } = req.body;

      // Właściwy endpoint Google My Business do tworzenia postów
      const response = await mybusiness.accounts.locations.localPosts.create({
        parent: "accounts/{account_id}/locations/{location_id}",
        requestBody: {
          summary: postContent.title,
          callToAction: {
            actionType: "LEARN_MORE",
            url: postContent.url,
          },
          media: [
            {
              mediaFormat: "PHOTO",
              sourceUrl: postContent.imageUrl,
            },
          ],
        },
      });

      res
        .status(200)
        .json({ message: "Post published successfully", data: response.data });
    } catch (error) {
      console.error("Error publishing post: ", error);
      res.status(500).json({ error: "Error publishing post" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
