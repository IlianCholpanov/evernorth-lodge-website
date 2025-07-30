import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Evernorth Lodge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>2025</footer>
      </body>
    </html>
  );
}
