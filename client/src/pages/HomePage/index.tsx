import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export function HomePage() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="text-center">
          <h1 className="h3 mb-3 fw-normal">Home Page</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}