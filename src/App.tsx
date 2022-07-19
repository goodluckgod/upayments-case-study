import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  //@ts-ignore
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Home } from './Pages/Home';

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Product } from "./Pages/Product";
import { AddProduct } from "./Pages/AddProduct";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
        queries : {
          retry: false,
        }
    }
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-zinc-700 min-h-screen font-sans">
        <Header />
        <div
          className="mb-12"
        >
          <Router>
            <Routes >
              <Route path="/" element={<Home />}></Route>
              <Route path="/product/:id" element={<Product />}></Route>
              <Route path="/add-product" element={<AddProduct />}></Route>
              <Route path="*" element={
                <div
                  className="px-16 py-12 text-center text-white text-6xl"
                >
                    <h1>404</h1>
                    <p className='text-5xl'>Page not found</p>
                </div>
              }></Route>
            </Routes >
          </Router>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
 
  );
} 

export default App;
