import { useState } from "react";
import Hero from "./components/Hero";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PersitentCount from "./components/PersitentCount";
import SideEffect from "./components/use-effect"
import MemoProps from "./hooks/use-memo"
import KeysndValues from "./pages/draft/index"

const App = () => {
  const [demo, setDemo] = useState(true);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });



  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setDemo(!demo)}>Toggle Demo</button>
      {demo && <Hero />}
      <PersitentCount />
      <KeysndValues></KeysndValues>
      {/* <SideEffect/> */}
      {/* <MemoProps/> */}
    </QueryClientProvider>
  );
};

export default App;
