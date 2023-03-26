import { Header } from "widgets/Header"
import { AppRouter } from "./providers/router/ui/AppRouter"

function App() {
  return (
   <div>
      <Header />
      <div style={{maxWidth: '1140px', margin: 'auto', padding: '5px'}}>
         <AppRouter />
      </div>
   </div>
  )
}

export default App
