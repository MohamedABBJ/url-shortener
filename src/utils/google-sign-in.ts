"use server";

const googleSignIn = () => {
  const googleOauth = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/&client_id=399456137042-5l9ent302j86l5r0l643fodkc0dakogk.apps.googleusercontent.com
 `;

  return googleOauth;
};
export default googleSignIn;
