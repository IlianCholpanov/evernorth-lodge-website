import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Evernorth Lodge",
    default: "Welcome / Evernorth Lodge",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Scandinavian Mountains, where beautiful peaks and dark forests surround you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
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
