import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Model from "@/pages/Model";
import Benchmark from "@/pages/Benchmark";
import Contact from "@/pages/Contact";
import Prediction from "@/pages/Prediction";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/model" component={Model} />
          <Route path="/benchmark" component={Benchmark} />
          <Route path="/contact" component={Contact} />
          <Route path="/prediction" component={Prediction} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
