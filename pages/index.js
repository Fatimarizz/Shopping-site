
import { Fragment, useState, useEffect } from 'react'
import Header from '../components/header';
import ProductDetail from '../components/productDetail'
import MainSection from '../components/MainSection';
import FavouritesSection from '../components/favouritesSection';

export default function Example() {
    return (
        <div className="bg-white">

            <Header />
          
                {/* Crousel Section */}
                <MainSection />

                {/* Favorites section */}
                <FavouritesSection />

                {/* Product Details Section */}
                <ProductDetail />

           


        </div>
    )
}
