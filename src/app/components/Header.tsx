import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">LinkedIn Profile Generator</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="hover:text-blue-200 transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/profile-generator" 
                className="hover:text-blue-200 transition-colors"
              >
                Generador
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
