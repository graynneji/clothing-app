// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const Signin = () => {
  // useEffect(() => {
  //   getResponse();
  // }, []);

  // //helper function
  // const getResponse = async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);

  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};
export default Signin;
