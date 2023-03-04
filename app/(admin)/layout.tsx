import "../../styles/globals.css";

export const metadata = {
  title: "HEADLESS Content Studio",
  description: "Ivo's blog",
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
