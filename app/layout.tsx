import "../styles/globals.css";

import Store from "./../components/Store";

export const metadata = {
  title: "HEADLESS - Ivo - React Developer",
  description: "Headless Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Store>{children}</Store>
        </body>
      </html>
    </>
  );
}
