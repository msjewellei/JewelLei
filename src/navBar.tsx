function NavBar() {
  return (
    <>
      <div className="absolute top-6 left-6 text-sm font-semibold">
      Jewel Lei L. Tabbada
      </div>
      <div className="absolute top-6 right-6 flex gap-8 text-sm font-medium text-gray-700">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contacts</a>
      </div>
    </>
  );
}

export default NavBar;
