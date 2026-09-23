import { useState, useEffect } from 'react'
import DemoProductCard from './DemoProductCard'
import { current } from '@reduxjs/toolkit'



function DemoProduct() {
  const [products, setProducts] = useState({})
  const [currentPage, setCurrentPage] = useState(0)
  
  const fetchData = async () =>{
    const data = await fetch('https://dummyjson.com/products?limit=500');
    const json = await data.json();
    console.log(json.products);
    setProducts(json.products);
  }

  useEffect(()=>{
    fetchData();
  },[])

  const PAGE_SIZE = 10;

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts/ PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n)
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1)
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  };

  return !products.length ? (<h1>No Products</h1>) : (
    <div >
      <h1 className='text-center '>Products list</h1>
      <div className='text-center my-4'>
        <button className='cursor-pointer' disabled={currentPage === 0} onClick={goToPrevPage} >⬅️</button>
        {[...Array(noOfPages).keys()].map((n)=> (
          <span className={'cursor-pointer border p-2 ' + (n === currentPage ? "active" : "")} key={n} onClick={() => handlePageChange(n)}>{n}</span>
          ))
        }
         <button className='cursor-pointer' disabled={currentPage === noOfPages - 1 } onClick={goToNextPage} >➡️</button> 
      </div>
      <div className="p-wrap">
        { products.slice(start, end).map(p => <DemoProductCard key={p.id} image={p.thumbnail} title={p.title}/> ) }
      </div>
    </div>
  )
}

export default DemoProduct;
