import MainLayout from "./components/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./context/AppContext";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <MainLayout />
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default App;
