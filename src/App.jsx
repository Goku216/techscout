import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
