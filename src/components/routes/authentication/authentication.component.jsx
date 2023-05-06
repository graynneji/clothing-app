// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import // auth,
// signInWithGooglePopup,
// signInWithGoogleRedirect,
"../../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import "./authentication.style.scss";

const Authentication = () => {
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

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
