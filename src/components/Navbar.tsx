export default function Navbar() {
  return (
    <div className="m-auto w-full max-w-screen-2xl">
      <nav className="navbar p-0">
        <div className="navbar-start">
          <a href="btn btn-ghost text-xl">HoistLoop</a>
        </div>

        <div className="navbar-center">Links</div>

        <div className="navbar-end">
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </nav>
    </div>
  );
}
