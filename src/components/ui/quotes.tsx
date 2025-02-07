interface QuoteProps {
    text: string;
    author?: string;
    role?: string;
    avatarUrl?: string;
  }
  
  export const Quote: React.FC<QuoteProps> = ({ text, author, role, avatarUrl }) => {
    return (
      <figure className="max-w-screen-md mx-auto text-center mt-8">
        <div className="mb-4 text-gray-400">
          <svg className="w-10 h-10 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5 5 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5 5 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
        </div>
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
            "{text}"
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          {avatarUrl && (
            <img 
              className="w-6 h-6 rounded-full" 
              src={avatarUrl} 
              alt={`${author}'s avatar`}
            />
          )}
          <div className="flex items-center divide-x-2 divide-gray-300">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              {author}
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              {role}
            </cite>
          </div>
        </figcaption>
      </figure>
    );
  };