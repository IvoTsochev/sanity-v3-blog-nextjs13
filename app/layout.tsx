import "../styles/globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
