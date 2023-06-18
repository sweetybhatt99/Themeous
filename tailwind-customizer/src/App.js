import logo from './logo.svg';
import './App.css';
import Preview from './components/Preview';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1 className="text-5xl">Customizer</h1>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="card-image.jpg" alt="Card image" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  Card Link
                </a>
                <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper enim vitae erat tristique, non dictum tortor fermentum.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <h1 className="text-5xl">Preview</h1>
        <Preview />
      </div>
    </div>
  );
}

export default App;
