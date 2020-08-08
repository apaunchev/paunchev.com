import SiteLink from "./SiteLink";

const Header = () => (
  <header className="Header">
    <div>
      <img className="Avatar" src="/images/me.jpg" alt="Photo of Angel" />
    </div>
    <div>
      <h1 className="Title">Angel Paunchev</h1>
      <nav className="Navigation">
        <SiteLink href="/">
          <a>About</a>
        </SiteLink>
        <SiteLink href="/projects">
          <a>Projects</a>
        </SiteLink>
        <SiteLink href="/posts">
          <a>Blog</a>
        </SiteLink>
        <SiteLink href="/books">
          <a>Books</a>
        </SiteLink>
        <SiteLink href="/bookmarks">
          <a>Bookmarks</a>
        </SiteLink>
      </nav>
    </div>
  </header>
);

export default Header;
