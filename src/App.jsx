import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  Footer,
  FAQ,
} from "../component/all-element";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
