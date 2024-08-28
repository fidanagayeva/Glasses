import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./_provide/SwrProvide";
import toast, {Toaster} from "react-hot-toast";
import Layout from "./_featured/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Layout>
          <Toaster 
          position="top-right"
          toastOptions={{
            className: "bg-blue-600 text-white",
          }}
          />
          <main>{children}</main>
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
