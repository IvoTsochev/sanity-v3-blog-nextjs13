import Image from "next/image";
import Link from "next/link";

export const BlogHeader = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://ivaylotsochev.com/headless_new_logo.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="Headless Logo"
          />
        </Link>
        <h1>HEADLESS TEAM</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 tetxt-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full"
        >
          Sign up for my Newsletter
        </Link>
      </div>
    </header>
  );
};
