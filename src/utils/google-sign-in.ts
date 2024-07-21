"use server";

const googleSignIn = (props: { mode: string; acessToken?: string }) => {
  const checkUserIdentity = async () => {
    const getUserData = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${props.acessToken}`
    );
    console.log(await getUserData.json());
  };

  if (props.mode == "userLogin") {
    const googleOauth = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/&client_id=399456137042-5l9ent302j86l5r0l643fodkc0dakogk.apps.googleusercontent.com
   `;
    return googleOauth;
  }
  if (props.mode == "checkUserIdentity") {
    checkUserIdentity();
  }
};

export default googleSignIn;
