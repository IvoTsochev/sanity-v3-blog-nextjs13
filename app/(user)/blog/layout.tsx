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
      <body className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 max-w-7xl mx-auto">
        <BlogHeader />
        <BlogBanner />
        {children}
      </body>
    </html>
  );
}
