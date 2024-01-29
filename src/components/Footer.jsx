import { BiLogoGmail, BiLogoLinkedinSquare, BiLogoTwitter } from "react-icons/bi";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (

    <footer className="bg-gray-800 text-white p-8 md:p-24">

      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Footer Section 1 */}

        <div className=" flex flex-col items-center justify-center gap-6 max-w-sm">
          <a className="block" href="/">
            <img className="w-28" src="white-logo.png" alt="" />
          </a>
          <p className="text-sm text-center md:text-start">
            OmniTask Name is dedicated to helping students manage their tasks
            efficiently and enhance their learning experience.
          </p>

          <div className="w-full flex gap-2 justify-center md:justify-start">
            <BiLogoLinkedinSquare />
            <BiLogoTwitter />
            <BiLogoGmail />
          </div>

        </div>

        {/* Footer Section 2 */}

        <div>

          <h3 className="text-xl md:text-2xl font-bold font-Quicksand">Subscribe for Academic Excellence with OmniTask!</h3>

          <p className="py-4 font-Quicksand text-xs max-w-sm">Join OmniTask now! Subscribe for exclusive updates, tips, and a streamlined task management experience. Transform your academic journey today!</p>

          <div className="flex flex-col w-full max-w-sm items-center space-y-2">
            <Input type="email" placeholder="Email" />
            <Button className="w-full bg-blue-600" type="submit">Subscribe</Button>
          </div>

        </div>

        {/* Footer Section 3 */}

      </div>

      {/* Bottom Copyright */}

    </footer>
  );
};

export default Footer;
