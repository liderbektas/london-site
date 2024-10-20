import Footer from "./components/footer";
import Info from "./components/info";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // Importing icons

const Contact = () => {
  const iconStyle = {
    color: 'white',
    fontSize: '1.5rem',
    marginRight: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="flex flex-col w-full h-auto pt-24 bg-black lg:pt-48">
      <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-8 px-4 mx-auto lg:flex-row">
        <div className="flex flex-col flex-1 gap-8 lg:pb-20">
          <Info
            title="Contact Us"
            info="📞 +4402089641014"
            extraInfo={
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:alibabakebap1212@gmail.com"
                  className="text-white hover:underline"
                >
                  ✉️ alibabakebap1212@gmail.com
                </a>
                <div className="flex flex-col mt-2 gap-6 justify-center items-center">
                  <a href="https://www.instagram.com/alibabaqueenspark?igsh=NXFrdm9sOGY0MzJ2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <FaInstagram style={iconStyle} />
                    <span className="text-white hover:underline">Instagram</span>
                  </a>
                  <a href="https://www.tiktok.com/@alibabaqueenspark?_t=8qeP63HMvse&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <FaTiktok style={iconStyle} />
                    <span className="text-white hover:underline">TikTok</span>
                  </a>
                </div>
              </div>
            }
          />
        </div>

        {/* Address Section */}
        <div className="flex flex-col flex-1 gap-8 px-8 border-gray-700 lg:px-15 lg:border-x">
          <Info
            title="Address"
            info="330 Kilburn Lane, Queens Park W9 3EF"
          />
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.2292683189916!2d-0.20678158422986645!3d51.53126801738659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610d1c23f4c0b%3A0x50a6a2f1b99f9c7a!2s330%20Kilburn%20Ln%2C%20Queen&#39;s%20Park%2C%20London%20W9%203EF%2C%20UK!5e0!3m2!1sen!2str!4v1697637848123!5m2!1sen!2str"
              width="100%"
              height="170"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div className="flex flex-col flex-1 gap-8">
          <Info
            title="Opening Hours"
            info={
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Weekdays</h3>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <span>Monday:</span>
                    <span>11:30 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday:</span>
                    <span>11:30 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday:</span>
                    <span>11:30 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday:</span>
                    <span>11:30 AM - 12:00 PM</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-4">Weekend</h3>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span>11:30 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>11:30 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 AM - 12:00 PM</span>
                </div>
              </div>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
