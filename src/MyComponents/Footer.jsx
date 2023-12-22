

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 md:p-24 mt-8">
      <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Footer Section 1 */}
        <div>
          <p className="text-lg font-bold mb-2">About Us</p>
          <p className="text-sm">
          OmniTask Name is dedicated to helping students manage their tasks
            efficiently and enhance their learning experience.
          </p>
        </div>

        {/* Footer Section 2 */}
        <div>
          <p className="text-lg font-bold mb-2">Quick Links</p>
          <p className="text-sm">
            <a
              href="/about"
              className="text-blue-500 hover:underline"
            >
              About Us
            </a>
            <br />
            <a
              href="/contact"
              className="text-blue-500 hover:underline"
            >
              Contact Us
            </a>
          </p>
        </div>

        {/* Footer Section 3 */}
        <div>
          <p className="text-lg font-bold mb-2">Stay Connected</p>
          <p className="text-sm">
            Follow us on{' '}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              // Add your social media links here
            >
              Twitter
            </a>{' '}
            |{' '}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              // Add your social media links here
            >
              Facebook
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="text-sm mt-4 text-center">
      OmniTask &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
