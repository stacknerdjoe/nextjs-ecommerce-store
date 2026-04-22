import "./globals.css";
import './fanta.css'
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Naijastore",
  description: "A cool store for programmers",
};

export default function RootLayout({ children })  {
  return (
  <ProductsProvider>
    <html lang="en" >
      <Head/>
      <body>
        <div id="portal" />
        <div id="app">
          <header>
            <div className="header-content">
            <Link href={'/'}>
              <h1>Naijastore</h1>
            </Link>
            <h5 className="mid-text">-great things for great people-</h5>
            <Cart />
           </div>
       </header>
       
             <main>
               {children}
             </main>
             <div className="hr" />

           <footer>
            <div className="email-container">
              <h5>get a sneak peak at new additions to the store, and special offers</h5>
              <EmailInput />
            </div>

            <div className="links-container">
              <div>
                <h3>Josepharry</h3>
                <Link target="_blank" href={'/'}>Josepharry Hub</Link>
                <Link target="_blank" href={'/'}>Roadmap</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/not-found'}>Contact</Link>
                <Link href={'/not-found'}>FAQs</Link>
              </div>

            </div>

            <div className="socials">
                <p>© <a href="https://www.JosephPortfolio.com" target="_blank">JosephPortfolio</a
                >2026 <br/>built with NextJS & <a target="_blank" href="https://wwww.fantacss.smoljames.com">FantaCSS</a>
                </p>
                  <div className="social-links">
                    <Link href={'https://github.com/stacknerdjoe'} target="_blank"> <i className="fa-brands fa-github"></i></Link>
                    <Link href={'/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                  </div>
            </div>
           </footer>
        </div>
      </body>
    </html>
  </ProductsProvider>
  );
}
