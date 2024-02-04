import Link from "next/link";
import { usePathname } from "next/navigation";

const Translate = () => {
  const pathName = usePathname();
  return (
    <div className="bg-white rounded-lg w-16 h-28 flex flex-col items-center justify-center gap-5">
      <ul>
        <Link href="/" className="hover:text-cyan-500 hover:bg-slate-500">
          <li>ខ្មែរ</li>
        </Link>
        <Link
          href="/"
          className={`hover:text-cyan-500 hover:bg-slate-400 ${
            pathName === "/" && "text-cyan-500 "
          }`}
        >
          <li className="mt-3">ENG</li>
        </Link>
      </ul>
    </div>
  );
};

export default Translate;
