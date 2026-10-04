import { navLinks, socialMedias } from "@/config/navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-[25vh] flex flex-col justify-center items-center gap-5 bg-[#111827] text-zinc-100">
        <div className="w-full h-[80%] flex justify-around items-center">
          <div>
            <h2 className="text-[clamp(0.8rem,3vw,1.5rem)]">DEVLOG</h2>
            <p className="text-[clamp(0.8rem,1.1vw,1.8rem)]">
              Share knowlege
              <br />
              Build better software
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="text-[clamp(0.8rem,3vw,1.5rem)]">Explore</h2>
            <ul className=" flex flex-col justify-center">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="duration-200 hover:text-[#1D4ED8] hover:underline text-[clamp(0.8rem,1.1vw,1.8rem)]"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social links">
            <h2 className="text-[clamp(0.8rem,3vw,1.5rem)]">Connect</h2>
            <ul className="w-full flex flex-col justify-center gap-5">
              <li className="duration-200 hover:text-[#1D4ED8] hover:underline text-[clamp(0.8rem,1.1vw,1.8rem)]">
                <Link href={socialMedias.Github.href}>
                  {socialMedias.Github.name}
                </Link>
              </li>
              <li className="duration-200 hover:text-[#1D4ED8] hover:underline text-[clamp(0.8rem,1.1vw,1.8rem)]">
                <Link href={socialMedias.LinkedIn.href}>
                  {socialMedias.LinkedIn.name}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full flex justify-center items-center border-t border-px">
          <h2>2026 - DEVLOG</h2>
          <h2>Build for devs</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
