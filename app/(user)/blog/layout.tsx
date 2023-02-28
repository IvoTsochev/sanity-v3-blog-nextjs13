import { BlogBanner } from "../../../components/BlogBanner";
import { BlogHeader } from "../../../components/BlogHeader";
import "../../../styles/globals.css";

export const metadata = {
  title: "My Blog",
  description: "Ivo's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BlogHeader />
        <BlogBanner />
        {children}
      </body>
    </html>
  );
}
