// app/layout.tsx
import "./globals.css";
import { ABeeZee } from "next/font/google";

const abeezee = ABeeZee({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Smart Crop Management System",
  description: "Role-based dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={abeezee.className}>{children}</body>
    </html>
  );
}
