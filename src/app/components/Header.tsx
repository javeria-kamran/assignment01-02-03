// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black shadow-md z-50">
      <div className="logo-container">
        <Link href="/">
          <img src="/images/logo-new.png" alt="Logo" width={50} height={50} className="cursor-pointer" />
        </Link>
      </div>
      <nav className="flex space-x-6">
        <Link href="/about" className="text-white hover:text-blue-400 transition duration-300">About</Link>
        <Link href="/blog" className="text-white hover:text-blue-400 transition duration-300">Blog</Link>
        <Link href="/details" className="text-white hover:text-blue-400 transition duration-300">Details</Link>
        <Link href="/contact" className="text-white hover:text-blue-400 transition duration-300">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;


