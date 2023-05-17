import { PrismaClient } from "@prisma/client";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import { FavContextProvider } from "./context/FavContext";
import { ReviewContextProvider } from "./context/ReviewContext";

const prisma = new PrismaClient();

const fetchBookings = async () => {
  const bookings = await prisma.booking.findMany({
    select: {
      id: true,
      restaurant: true,
      booking_time: true,
      number_of_people: true,
      booker_email: true,
    },
  });

  return bookings;
};

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
  const bookings = await fetchBookings();

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
        <main className="bg-gray-200 min-h-screen w-screen">
          <AuthContextProvider>
            <FavContextProvider>
              <ReviewContextProvider>
                <div className="bg-white">
                  <Navbar bookings={bookings} />
                  {children}
                </div>
              </ReviewContextProvider>
            </FavContextProvider>
          </AuthContextProvider>
        </main>
      </body>
    </html>
  );
}
