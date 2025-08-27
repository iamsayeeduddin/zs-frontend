// Header.jsx
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2'; // optional

export default function Header() {
  return (
    <header className="bg-[#f7f4ed]">
      {/* 95 % wrapper – stacks on mobile, row on ≥ lg */}
      <nav className="w-[95%] mx-auto flex flex-col items-center lg:flex-row lg:justify-between gap-3 py-4">
        {/* logo */}
        <Link
          to="/"
          className="font-serif font-semibold tracking-[0.2em]
                     text-3xl sm:text-4xl lg:text-5xl
                     text-[#20000d] hover:text-[#801020] transition-colors"
        >
          ZUBAIR&nbsp;SAJJAD
        </Link>

        {/* nav links */}
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/MensWear"   className="text-sm sm:text-base navTab">MENSWEAR</Link>
          <Link to="/WomensWear" className="text-sm sm:text-base navTab">WOMENSWEAR</Link>
          <Link to="/HairStyish" className="text-sm sm:text-base navTab">HAIRSTYLISH</Link>
        </div>

        {/* uncomment if you want a mobile menu icon */}
        {/* <HiBars3 className="block lg:hidden text-2xl cursor-pointer" /> */}
      </nav>
    </header>
  );
}
