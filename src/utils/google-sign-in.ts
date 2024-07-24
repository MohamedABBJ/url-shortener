/* "use server";

import { google } from "googleapis";
import { cookies } from "next/headers";

const googleSignIn = () => {
  const oAuthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/"
  );

  const scope = "https://www.googleapis.com/auth/userinfo.email";

  const state = crypto.randomUUID();

  cookies().set("state", state);

  return oAuthClient.generateAuthUrl({
    access_type: "offline",
    scope: scope,
    include_granted_scopes: true,
    state: state,
  });
};

export default googleSignIn;
 */
/*

  const checkUserIdentity = async () => {
    const getUserData = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${props.acessToken}`
    );
    localStorage.setItem("acess_token", props.acessToken as string);
    localStorage.setItem("type", "Google");
  };

  if (props.mode == "userLogin") {
    const googleOauth = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/api/&client_id=399456137042-5l9ent302j86l5r0l643fodkc0dakogk.apps.googleusercontent.com
   `;
    return googleOauth;
  }
  if (props.mode == "checkUserIdentity") {
    checkUserIdentity();
  }
  */
