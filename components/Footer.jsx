import Image from "next/image";
import { useState } from "react";

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b md:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 font-semibold text-gray-800 md:cursor-default md:pointer-events-none"
      >
        {title}
        <span className="md:hidden">{isOpen ? "▲" : "▼"}</span>
      </button>
      <div className={`space-y-2 ${isOpen ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <CollapsibleSection title="Hobbycue">
          <ul className="text-gray-600 space-y-2">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </CollapsibleSection>

        {/* Column 2 */}
        <CollapsibleSection title="How Do I?">
          <ul className="text-gray-600 space-y-2">
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim a Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </CollapsibleSection>

        {/* Column 3 */}
        <CollapsibleSection title="Quick Links">
          <ul className="text-gray-600 space-y-2">
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop/Store</li>
            <li>Community</li>
          </ul>
        </CollapsibleSection>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-4">Social Media</h4>
          <div className="flex space-x-4 mb-4">
            <div className="w-6 h-6">
              <Image
                src="/104498_facebook_icon 1.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </div>
            <div className="w-6 h-6">
              <Image
                src="/Vector (1).png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </div>
            <div className="w-6 h-6">
              <Image
                src="/group.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </div>
            <div className="w-6 h-6">
              <Image
                src="/Vector (2).png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </div>
          </div>
          <label htmlFor="email-invite" className="text-black font-bold">
            Invite Friends
          </label>
          <div className="flex mt-2">
            <input
              id="email-invite"
              type="email"
              placeholder="Email ID"
              className="w-full px-3 py-2 border rounded-l-md text-sm focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition duration-300">
              Invite
            </button>
          </div>
        </div>
      </div>
      <p className="text-center bg-purple-400 text-white mt-6 py-4">
        © Purple Cues Private Limited
      </p>
    </footer>
  );
}
