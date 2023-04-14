import { useState } from 'react';
import Link from 'next/link';

export default function BasicMenu() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const menuItems = [
    { label: 'Home', value: 'Home', url: '/' },
    { label: 'TV Shows', value: 'TV Shows', url: '/tv' },
    { label: 'Movies', value: 'Movies', url: '/movies' },
    { label: 'New & Popular', value: 'New & Popular', url: '/new-popular' },
    { label: 'My List', value: 'My List', url: '/my-list' },
  ];

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Browse
      </button>
      {showDropdown && (
        <div className="absolute z-10 right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.url}>
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
