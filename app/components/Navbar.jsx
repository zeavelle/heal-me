import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary h-20 fixed top-0 left-0 w-full px-14 text-sm font-medium z-50">
      <div className="size-[4.5rem] absolute top-1/2 -translate-y-1/2">
        <Image src="/logo.webp" fill={true} className="object-contain" />
      </div>
      <div className="w-full h-full flex justify-center items-center gap-7 text-putih">
        <Link href="/">Home</Link>
        <Link href="/">Tes Gratis</Link>
        <Link href="/">Komunitas</Link>
        <Link href="/">Psikolog</Link>
        <Link href="/">Tentang Kami</Link>
      </div>
      <div className="absolute top-0 right-14 flex items-center gap-2 h-full px-7">
        <Link
          href="/daftar"
          className="bg-accent text-putih rounded-md py-1 px-3 hover:bg-accent-darker transition-colors"
        >
          Daftar
        </Link>
        <Link
          href="/masuk"
          className="bg-putih text-accent rounded-md py-1 px-3 hover:bg-putih-darker transition-colors"
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
