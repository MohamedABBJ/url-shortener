import { google } from "googleapis";

const oAuthClient = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/api/"
);

export default async function SignIn(req, res) {
  const { searchParams } = req;

  try {
    const { tokens } = await oAuthClient.getToken(searchParams.code);
    oAuthClient.setCredentials(tokens);

    const oauth2 = google.oauth2({ auth: oAuthClient, version: "v2" });
    const userinfo = await oauth2.userinfo.get();

    console.log(userinfo);
  } catch (error) {
    console.log(error);
  }
}
