import Navbar from "../Navbar/NavbarHome";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
