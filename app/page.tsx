import Image from 'next/image'
 
export default function Page() {
  return (
    <>
      <div className="w-5xl mx-auto mt-12 relative">
        <nav className="flex justify-between">      
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
        <section className="mb-16">
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

        {/* Carousell Section */}
        <section className="relative flex flex-col items-end">
          <div className="overflow-hidden w-full mb-8">
            <div className="flex gap-4 overflow-x-scroll w-full">
              <img src="customcake.jpg" className="w-54 rounded-[1.5rem] mb-4" />
              <img src="babycake.jpg" className="w-54 rounded-[1.5rem] mb-4" />
              <img src="cupcakes.jpg" className="w-54 rounded-[1.5rem] mb-4" />
              <img src="buttercake.jpg" className="w-54 rounded-[1.5rem] mb-4" />
              <img src="cupcakes-2.jpg" className="w-54 rounded-[1.5rem] mb-4" />
            </div>
          </div>
          <a href="" className="outline-2 outline-color-slate-700 hover:outline-color-slate-900 px-8 py-1.5 text-lg left-0 rounded-lg transition text-slate-700 hover:text-slate-900 shadow-[6px_6px_0_#00000040] hover:shadow-[10px_10px_0_#00000080] flex items-center gap-2">Buka galeri
            <svg width="35" height="13" viewBox="0 0 35 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.40816 12.0323L8.56376 12.766L8.56376 12.766L8.40816 12.0323ZM13.7959 6.12864L13.7352 5.3811L13.7959 6.12864ZM19.8571 12.0323L19.9178 12.7799L19.8571 12.0323ZM33.9764 6.70791C34.2963 6.44481 34.3424 5.97217 34.0793 5.65225L29.7918 0.4388C29.5287 0.118877 29.0561 0.072813 28.7361 0.335914C28.4162 0.599014 28.3702 1.07165 28.6333 1.39157L32.4443 6.02575L27.8102 9.83684C27.4902 10.0999 27.4442 10.5726 27.7073 10.8925C27.9704 11.2124 28.443 11.2585 28.7629 10.9954L33.9764 6.70791ZM1 6.12864C0.365076 6.52785 0.36517 6.528 0.36528 6.52817C0.365338 6.52827 0.365464 6.52847 0.36558 6.52865C0.365811 6.52902 0.366106 6.52949 0.366464 6.53005C0.36718 6.53119 0.368149 6.53272 0.369368 6.53465C0.371806 6.5385 0.375244 6.54391 0.379664 6.55084C0.388504 6.5647 0.401273 6.58462 0.417818 6.61017C0.450902 6.66127 0.499112 6.73493 0.561216 6.82775C0.685368 7.0133 0.865372 7.2759 1.09136 7.58811C1.54214 8.21089 2.18155 9.03897 2.93038 9.84899C3.67465 10.6541 4.55201 11.4688 5.48194 12.0406C6.40043 12.6053 7.47547 12.9968 8.56376 12.766L8.40816 12.0323L8.25256 11.2987C7.71022 11.4137 7.04392 11.2401 6.26763 10.7628C5.50278 10.2925 4.73194 9.58806 4.03182 8.83074C3.33628 8.07837 2.73513 7.30084 2.30646 6.7086C2.09272 6.41331 1.92327 6.16604 1.8079 5.99361C1.75024 5.90744 1.70617 5.84008 1.67692 5.7949C1.66229 5.77232 1.65138 5.75528 1.64433 5.74423C1.6408 5.7387 1.63824 5.73467 1.63667 5.73218C1.63588 5.73094 1.63534 5.73008 1.63505 5.72962C1.6349 5.72939 1.63482 5.72926 1.6348 5.72923C1.63479 5.72921 1.63482 5.72926 1.63481 5.72925C1.63486 5.72932 1.63492 5.72942 1 6.12864ZM8.40816 12.0323L8.56376 12.766C9.46244 12.5754 10.1007 11.9946 10.5788 11.3569C11.0495 10.7292 11.4267 9.96057 11.7635 9.29007C12.1177 8.58508 12.4298 7.98285 12.7932 7.53773C13.1429 7.1094 13.4751 6.90714 13.8566 6.87618L13.7959 6.12864L13.7352 5.3811C12.8037 5.4567 12.1313 5.97669 11.6313 6.58905C11.145 7.18461 10.7623 7.94148 10.4231 8.61677C10.0666 9.32656 9.75194 9.95934 9.37873 10.457C9.01297 10.9448 8.65528 11.2133 8.25256 11.2987L8.40816 12.0323ZM13.7959 6.12864L13.8566 6.87618C14.232 6.8457 14.5744 7.0089 14.9719 7.47369C15.3854 7.95722 15.7485 8.64068 16.1625 9.42914C16.5537 10.1742 16.9957 11.0244 17.5412 11.6622C18.1027 12.3187 18.873 12.8647 19.9178 12.7799L19.8571 12.0323L19.7965 11.2848C19.421 11.3153 19.0787 11.1521 18.6812 10.6873C18.2677 10.2038 17.9045 9.52031 17.4906 8.73184C17.0994 7.98674 16.6573 7.13663 16.1119 6.4988C15.5504 5.84224 14.78 5.29629 13.7352 5.3811L13.7959 6.12864ZM19.8571 12.0323L19.9178 12.7799C20.8354 12.7054 21.5458 12.1943 22.1041 11.6009C22.6567 11.0136 23.135 10.2639 23.5681 9.58094C24.019 8.8698 24.4255 8.2235 24.871 7.71823C25.3141 7.21572 25.7207 6.94205 26.1347 6.86643L26 6.12864L25.8653 5.39084C24.9744 5.55353 24.289 6.11033 23.7459 6.72615C23.2053 7.3392 22.7316 8.09908 22.3013 8.77765C21.8531 9.48439 21.4492 10.108 21.0116 10.5731C20.5797 11.0321 20.1919 11.2527 19.7965 11.2848L19.8571 12.0323ZM26 6.12864L26.1347 6.86643C27.3508 6.64434 29.1527 6.63984 30.6998 6.69935C31.4631 6.72871 32.1466 6.77279 32.6393 6.80954C32.8855 6.8279 33.0836 6.84439 33.2196 6.85625C33.2876 6.86218 33.3401 6.86695 33.3753 6.87021C33.3929 6.87184 33.4062 6.87309 33.4149 6.87392C33.4193 6.87433 33.4225 6.87464 33.4246 6.87484C33.4256 6.87494 33.4263 6.87501 33.4268 6.87506C33.427 6.87508 33.4272 6.87509 33.4272 6.8751C33.4273 6.8751 33.4273 6.8751 33.4273 6.8751C33.4273 6.8751 33.4272 6.8751 33.5 6.12864C33.5728 5.38217 33.5727 5.38217 33.5726 5.38216C33.5725 5.38215 33.5724 5.38214 33.5723 5.38213C33.5721 5.38211 33.5718 5.38208 33.5714 5.38204C33.5707 5.38197 33.5697 5.38187 33.5683 5.38175C33.5657 5.38149 33.5618 5.38112 33.5569 5.38065C33.5469 5.37971 33.5324 5.37834 33.5136 5.37659C33.4759 5.3731 33.4207 5.36809 33.3499 5.36192C33.2083 5.34958 33.004 5.33257 32.7509 5.31369C32.2451 5.27597 31.543 5.23068 30.7575 5.20046C29.207 5.14082 27.2589 5.13632 25.8653 5.39084L26 6.12864Z" fill="black"/>
            </svg>

          </a>
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
        <div className="w-full h-full blur-md absolute bg-[url(fake-maps.png)] bg-center bg-cover top-0 left-0 scale-105 z-0"></div>
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