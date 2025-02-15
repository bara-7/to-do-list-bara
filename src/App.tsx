
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import Auth from "./components/Auth";
import TodoList from "./components/TodoList";

function AppContent() {
  const { user } = useAuth();
  return user ? <TodoList /> : <Auth />;
}

const App = () => (
  <AuthProvider>
    <Toaster />
    <AppContent />
  </AuthProvider>
);

export default App;
