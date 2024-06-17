import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { ClerkProvider } from "@clerk/clerk-react";
import "@mantine/core/styles.css";
import "./index.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout.tsx";
import { ProtectedRoute } from "./layout/protectedroute.tsx";
import { HomePage } from "./pages/homepage.tsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export const RouterComponent = () => {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
    >
      <Routes>
        <Route path='' element={<RootLayout />}>
          <Route index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ClerkProvider>
  );
};
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
