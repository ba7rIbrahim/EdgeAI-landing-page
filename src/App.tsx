import { Layout } from "./layouts/Layout";
import {
  AboutUs,
  Brands,
  CallToAction,
  Hero,
  Pricing,
  Services,
} from "./components/sections";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CallToAction />
    </Layout>
  );
}

export default App;
