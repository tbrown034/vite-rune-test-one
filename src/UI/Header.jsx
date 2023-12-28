export default function Header() {
  return (
    <header className=" flex justify-between items-center p-2">
      <a href="/" className=" text-2xl cursor-pointer">
        WinterJam
      </a>
      <div className=" border-sky-50 border p-2 rounded hover:bg-purple-500 active:bg-purple-300 cursor-pointer">
        More
      </div>
    </header>
  );
}
