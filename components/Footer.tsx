import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[100] w-full bg-dark-1 py-4 text-center text-white">
      <p>
        Created by{' '}
        <Link 
          href="https://www.linkedin.com/in/abhijeet-patil-01035333a/" 
          target="_blank"
          className="text-blue-500 hover:text-blue-400"
        >
          Abhijeet Patil
        </Link>
      </p>
    </footer>
  );
};

export default Footer; 