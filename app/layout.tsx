import React, { ReactNode } from "react";
import "@/styles/globals.css";
import Providers from "./providers";
import { Metadata } from "next";
import PoweredByLogo from "@/modules/ui/PoweredByLogo";
import Navbar from "@/components/Navbar"; 

export const metadata: Metadata = {
  title: {
    default: "Andromeda Nextjs Starter",
    template: "%s | App Name",
  },
};

interface Props {
  children?: ReactNode;
}

const RootLayout = async (props: Props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className="dark">
        <Providers>
          {/* ✅ Navbar will now show on all pages */}
          <Navbar />
          
          {/* Page-specific content */}
          {children}

          {/* Footer/Powered by logo */}
          <PoweredByLogo />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
