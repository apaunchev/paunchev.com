import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="Header">
      <div>
        <img className="Avatar" src="/images/me.jpg" alt="Photo of Angel" />
      </div>
      <div>
        <h1 className="Title">Angel Paunchev</h1>
        <nav className="Navigation">
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>About</a>
          </Link>
          <Link href="/projects">
            <a className={router.pathname === "/projects" ? "active" : ""}>
              Projects
            </a>
          </Link>
          <Link href="/posts">
            <a className={router.pathname === "/posts" ? "active" : ""}>
              Notes
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className={router.pathname === "/bookmarks" ? "active" : ""}>
              Bookmarks
            </a>
          </Link>
          <Link href="/cv">
            <a>CV</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
