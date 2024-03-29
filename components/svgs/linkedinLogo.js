import Link from "next/link"

export default function LinkedinLogo({className, href}){
  return <Link href={href}>
    <a>
      <svg width="24" height="24" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <title id="linkedinLogo">LinkedIn badge</title>
        <path d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10 8C10 8.557 9.553 9.008 9 9.008C8.447 9.008 8 8.558 8 8C8 7.443 8.447 6.992 9 6.992C9.553 6.992 10 7.444 10 8V8ZM10 10H8V16H10V10ZM13 10H11V16H13V13.139C13 11.417 15.002 11.258 15.002 13.139V16H17V12.641C17 9.357 13.872 9.477 13 11.093V10Z" />
      </svg>
    </a>
  </Link>
}