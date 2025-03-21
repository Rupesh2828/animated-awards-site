import { useState } from "react"
import Hero from "./components/Hero"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import PersitentCount from "./components/PersitentCount"

const App = () => {

  const [demo, setDemo] = useState(true)

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  })

  return (
  <QueryClientProvider client ={queryClient}>
    <button onClick={() => setDemo(!demo)} >Toggle Demo</button>
   {demo && <Hero/>}
   <PersitentCount/>
  </QueryClientProvider>
  )
}

export default App
