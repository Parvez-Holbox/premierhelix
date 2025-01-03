import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12" id='footer'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Phone: (123) 456-7890</li>
              <li className="text-gray-300">Email: info@premierhelix.com</li>
              <li className="text-gray-300">Business Hours: Monday to Friday, 9 AM – 5 PM EST</li>
            </ul>
          </div>

          {/* Disclaimer Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Disclaimer</h4>
            <p className="text-gray-300">
              Virtual consultations are not a substitute for emergency medical care. In
              case of an emergency, please dial 911 or visit your nearest hospital.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} PremierHelix LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
