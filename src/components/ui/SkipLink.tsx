interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

const SkipLink = ({ href, children }: SkipLinkProps) => {
  return (
    <a 
      href={href}
      className="skip-link"
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        (element as HTMLElement)?.focus();
      }}
    >
      {children}
    </a>
  );
};

export default SkipLink;