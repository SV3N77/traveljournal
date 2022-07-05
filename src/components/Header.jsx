export default function Header() {
  return (
    <header className="bg-red-400 p-6 text-white">
      <div className="flex items-center gap-2 container mx-auto">
        <img
          src="./images/globe-logo.png"
          alt="globe-logo"
          className="w-6 h-6"
        />
        <div className="text-xl ">My Travel Journal</div>
      </div>
    </header>
  );
}
