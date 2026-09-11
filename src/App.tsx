import './App.css';
import { Suspense } from 'react';
import Nav from './component/Nav';
import Banner from './component/Banner';
import ProductCard from './component/ProductCard';
import type { ItoolType } from './types/ToolType'



const toolsFetch = async(): Promise<ItoolType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
 const toolsPromise =toolsFetch();
 

  return (
    <>
        <Nav/>
        <Banner/>
        <Suspense fallback={<h2>Loading.....</h2>}>
        <ProductCard toolsPromise={toolsPromise}/>
        </Suspense>
    </>
  )
}

export default App
