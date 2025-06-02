'use client';

import Image from 'next/image'
import '/app/globals.css'
import { useState } from 'react';

export default function Page() {
  // let [menuTab, setMenuTab] = useState(1)
  let [productSelection, setProductSelection] = useState(2)
  return (
    <>
      <div className="mx-auto mt-12 relative">
        <nav className="flex justify-between w-5xl mx-auto">      
          <img src="logo.png" className="w-32" />
          <div className="mt-12">
            <ul className="flex gap-9 text-lg">
              <li><a href="" className="text-slate-600 hover:text-slate-900">Utama</a></li>
              <li><a href="" className="text-slate-600 hover:text-slate-900">Cakes</a></li>
              <li><a href="" className="text-slate-600 hover:text-slate-900">Desserts</a></li>
              <li><a href="" className="text-slate-600 hover:text-slate-900">Cafe Signatures</a></li>
              <li><a href="" className="text-slate-600 hover:text-slate-900">Lokasi</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="mb-16 w-5xl mx-auto">
          <div className="w-full flex flex-row gap-8 items-start">
            {/* Hero left */}
            <div className="flex w-full items-end justify-end mt-8">
              <img src="hero-art-1.png" className="relative -top-11 -right-10" />
              <div className="absolute w-[16rem] flex flex-col">
                <p className="mb-3 text-lg">Order Sekarang!</p>
                <a href="https://tr.ee/T2XHxvVd6c" target="_blank" className="bg-[#7EDB86] hover:bg-[#66C76E] z-10 px-6 py-2 text-2xl rounded-lg w-full text-center transition shadow-[6px_6px_0_rgba(32,194,0,0.25)] hover:shadow-[10px_10px_0_rgba(32,194,0,0.25)]">011 6324 3644 </a>
              </div>

            </div>
            {/* Hero right */}
            <div className="flex items-end w-full h-74">
              <div className="flex items-end flex-col relative w-84 ml-8">
                <p className="text-xl">my</p>
                <p className="text-7xl">QTBites</p>
                <p className="text-lg mt-2 text-right">Kafe & Kek Buatan Tangan, Dihasilkan dengan Cinta dan Kualiti</p>
              </div>
              </div>
          </div>
          <div>
            <ul className="flex gap-2 w-[34rem] flex-wrap mx-12">
              <li>Assorted Brownies</li>
              <li className="mt-2 mx-1.5"><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.00018" r="3" fill="black"/></svg></li>
              <li>Cupcakes</li>
              <li className="mt-2 mx-1.5"><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.00018" r="3" fill="black"/></svg></li>
              <li>Assorted Cakes</li>
              <li className="mt-2 mx-1.5"><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.00018" r="3" fill="black"/></svg></li>        
              <li>Custom Cakes</li>
              <li className="mt-2 mx-1.5"><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.00018" r="3" fill="black"/></svg></li>        
              <li>Baby Friendly Cakes</li>
            </ul>
          </div>
        </section>

        <section id="menu-gallery" className="bg-[#FFEFF7] py-24 px-28 flex items-start justify-center gap-8 w-full">
          {/* Left: Selection Container */}
          <div className="flex flex-col gap-2 mt-20 w-[24rem] text-xl">
            <span className={'px-5 py-3 cursor-pointer w-full' + (productSelection == 1 ? ' bg-slate-900 text-white rounded-xl shadow-[6px_6px_0_#F687DA]' : "")} onClick={() => setProductSelection(1)}>12 Wonders Of Brownies</span>
            <span className={'px-5 py-3 cursor-pointer w-full' + (productSelection == 2 ? ' bg-slate-900 text-white rounded-xl shadow-[6px_6px_0_#F687DA]' : "")} onClick={() => setProductSelection(2)}>Soft Butter Cakes</span>
            <span className={'px-5 py-3 cursor-pointer w-full' + (productSelection == 3 ? ' bg-slate-900 text-white rounded-xl shadow-[6px_6px_0_#F687DA]' : "")} onClick={() => setProductSelection(3)}>Mix Cheese Tart</span>
            <span className={'px-5 py-3 cursor-pointer w-full' + (productSelection == 4 ? ' bg-slate-900 text-white rounded-xl shadow-[6px_6px_0_#F687DA]' : "")} onClick={() => setProductSelection(4)}>Brookies</span>
            <span className={'px-5 py-3 cursor-pointer w-full' + (productSelection == 5 ? ' bg-slate-900 text-white rounded-xl shadow-[6px_6px_0_#F687DA]' : "")} onClick={() => setProductSelection(5)}>Baby Cakes</span>
            <span className={'px-5 py-3 cursor-pointer w-full' + (productSelection == 6 ? ' bg-slate-900 text-white rounded-xl shadow-[6px_6px_0_#F687DA]' : "")} onClick={() => setProductSelection(6)}>Custom Cakes</span>
          </div>
          {/* Right: Gallery Display Container */}
          <div className='w-full'>
            <h2 className="text-5xl mb-8">Menu Desserts</h2>
            <ProductWindow productSelection={productSelection} />

            {/* <div className="grid grid-cols-4 gap-6">
              <ProductCard itemName="Blondies" imageUrl="blondies.jpg" />
              <ProductCard itemName="Browkies" imageUrl="browkies.jpg" />
              <ProductCard itemName="Cheesy Choc Brownies" imageUrl="cheesy-choc-brownies.jpg" />
              <ProductCard itemName="Double Choc Brownies" imageUrl="double-choc-cheese-brownies.jpg" />
              <ProductCard itemName="Kunafa Pistachio Brownies" imageUrl="kunafa-pistachio-brownies.jpg" />
              <ProductCard itemName="Matcha Cheese Brownies" imageUrl="matcha-cheese-brownies.jpg" />
              <ProductCard itemName="Nutella Oat Brownies" imageUrl="nutella-oat-brownies.jpg" />
              <ProductCard itemName="Pandan Gula Melaka Brownies" imageUrl="pandan-gula-melaka-brownies.jpg" />
              <ProductCard itemName="Red Truffle Oreo Brownies" imageUrl="red-truffle-oreo-brownies.jpg" />
              <ProductCard itemName="Smorenies" imageUrl="smorenies.jpg" />
              <ProductCard itemName="Tiramisu Brownies" imageUrl="tiramisu-brownies.jpg" />
            </div> */}
          </div>
            {/* Dessert 1 */}
            {/* Dessert 2 */}
            {/* Dessert 3 */}
            {/* Dessert 4 */}
        </section>

        <section className="mt-52">
          <h2 className="text-2xl flex gap-3 justify-center mb-16">
            <img src="icon-title-cafe-signatures.png" alt="icon-title-cafe-signatures" className="w-28" />
            Our Cafe<br/>Signatures
          </h2>
          <div className="flex relative">
            <div className="w-full relative">
              <img src="menu-creamy-carbonara-pasta.png" alt="menu-creamy-carbonara-pasta" className="w-[24rem]" />
              <h3 className="text-3xl relative left-48">Creamy Carbonara Pasta</h3>
            </div>
            <div className="w-full relative top-16 -right-24">
              <h3 className="text-3xl relative -left-24">Nasi Lemak Ikan Tongkol</h3>
              <img src="menu-nasi-lemak-ikan-tongkol.png" alt="menu-nasi-lemak-ikan-tongkol" className="w-[24rem]" />
            </div>
          </div>      
        </section>

      </div>
      <section className="w-full mt-24 relative py-56 overflow-hidden">
        <div className="w-full h-full blur-md absolute bg-center bg-cover top-0 left-0 scale-105 z-0"></div>
        <div className="w-[40rem] px-12 pt-18 pb-10 bg-[#FFFFFFB3] z-10 relative mx-auto top-0 h-fit rounded-xl shadow-[20px_20px_0_#00000060] outline-4">
          <h2 className="text-center text-4xl">Alamat Kedai Kami</h2>
          <div className="my-12">
            <div className="flex flex-col gap-3 mb-6">
              <h3 className="text-2xl">Baking House</h3>
              <p>Lot 9101-A, Jalan kerdas 1, Kampung Kerdas, 53100, Gombak</p>
              <p>Waze : Qt Bites Cafe</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl">Qt Cafe</h3>
              <p>Lot 9101-A, Jalan kerdas 1, Kampung Kerdas, 53100, Gombak</p>
              <p>Waze : Qt Bites Cafe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ itemName, imageUrl }) {
  const itemUrl = "menu-brownies/" + imageUrl;
  return (
    <div>
      <img src={itemUrl} alt="product-pic" className="ring-4 mb-4 rounded-2xl" />
      <h4 className="text-xl">{itemName}</h4>
    </div>
  );
}

function ProductWindow({ productSelection }) {
  if (productSelection == 1)
    return (  
      <div className="grid grid-cols-4 gap-6">
        <ProductCard itemName="Blondies" imageUrl="blondies.jpg" />
        <ProductCard itemName="Browkies" imageUrl="browkies.jpg" />
        <ProductCard itemName="Cheesy Choc Brownies" imageUrl="cheesy-choc-brownies.jpg" />
        <ProductCard itemName="Double Choc Brownies" imageUrl="double-choc-cheese-brownies.jpg" />
        <ProductCard itemName="Kunafa Pistachio Brownies" imageUrl="kunafa-pistachio-brownies.jpg" />
        <ProductCard itemName="Matcha Cheese Brownies" imageUrl="matcha-cheese-brownies.jpg" />
        <ProductCard itemName="Nutella Oat Brownies" imageUrl="nutella-oat-brownies.jpg" />
        <ProductCard itemName="Pandan Gula Melaka Brownies" imageUrl="pandan-gula-melaka-brownies.jpg" />
        <ProductCard itemName="Red Truffle Oreo Brownies" imageUrl="red-truffle-oreo-brownies.jpg" />
        <ProductCard itemName="Smorenies" imageUrl="smorenies.jpg" />
        <ProductCard itemName="Tiramisu Brownies" imageUrl="tiramisu-brownies.jpg" />
      </div>
    )
}