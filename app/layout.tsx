import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import { FavContextProvider } from "./context/FavContext";
import { ReviewContextProvider } from "./context/ReviewContext";
import Footer from "./components/Footer";
import { BookingContextProvider } from "./context/BookingContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AddaKhana",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </head>
      <body>
        <main className="bg-gray-200 min-h-screen w-screen flex flex-col justify-between">
          <AuthContextProvider>
            <FavContextProvider>
              <ReviewContextProvider>
                <BookingContextProvider>
                  <div className="bg-white">
                    <Navbar />
                    {children}
                  </div>
                </BookingContextProvider>
                <Footer />
              </ReviewContextProvider>
            </FavContextProvider>
          </AuthContextProvider>
        </main>
      </body>
    </html>
  );
}
