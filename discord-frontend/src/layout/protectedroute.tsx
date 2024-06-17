import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
//https://www.youtube.com/watch?v=OsDW_ulfhdY&list=PLl6yY6TinjfLhAxdviRWoSVeyN9uiptF4&index=5
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn></RedirectToSignIn>
      </SignedOut>
    </>
  );
};
