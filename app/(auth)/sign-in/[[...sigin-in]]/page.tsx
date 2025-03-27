import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <SignIn />
      <footer className="mt-4 text-center text-sm text-gray-600">
        <p>Created by{' '}
          <a 
            href="https://www.linkedin.com/in/abhijeet-patil-01035333a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Abhijeet Patil
          </a>
        </p>
      </footer>
    </main>
  );
}
