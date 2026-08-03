import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes, Navigate } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@clerk/react";
import PageLoader from "./components/PageLoader";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  const clearAuth = useAuthStore((state) => state.clearAuth);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);
  const authUser = useAuthStore((state) => state.authUser);
  const connectSocket = useAuthStore((state) => state.connectSocket);
  const disconnectSocket = useAuthStore((state) => state.disconnectSocket);

  useEffect(() => {
    if (!isLoaded) return;
    if (isSignedIn) checkAuth();
    else {
      clearAuth();
      disconnectSocket();
    }
  }, [clearAuth, checkAuth, isLoaded, isSignedIn, disconnectSocket]);

  useEffect(() => {
    if (authUser) connectSocket(authUser);
    return () => disconnectSocket();
  }, [authUser, connectSocket, disconnectSocket]);

  if (!isLoaded || (isSignedIn && isCheckingAuth)) return <PageLoader />;

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />
        <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />} />
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;