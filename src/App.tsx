import NavBar from "./navBar";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="text-sm text-pink-300 font-semibold">
            UI/UX DESIGNER
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hello, my name <br /> is Jewel Lei L. Tabbada
          </h1>
          <p className="text-gray-500 max-w-md">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="flex gap-4">
            <button className="bg-pink-300 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition">
              Projects
            </button>
            <button className="border border-gray-400 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition">
              LinkedIn
            </button>
          </div>

        </div>
        <img src="./src/assets/blob.png" className="absolute top-[-80px] right-[-100px]" alt="Yellow Blob" />
        
      </div>
      <NavBar />
    </div>
  );
}

export default App;
