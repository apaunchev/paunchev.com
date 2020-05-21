import Link from "./Link";

export default () => (
  <header className="Header">
    <div>
      <img className="Avatar" src="/images/me.jpg" alt="Photo of Angel" />
    </div>
    <div>
      <h1 className="Title">Angel Paunchev</h1>
      <nav className="Navigation">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/notes">
          <a>Notes</a>
        </Link>
        <Link href="/bookmarks">
          <a>Bookmarks</a>
        </Link>
      </nav>
    </div>
  </header>
);
