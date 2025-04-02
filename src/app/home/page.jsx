"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaRegCircle } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";
import React, { useState } from 'react'
import Link from "next/link";
import { CommonTabs } from "@/common/commonTabs";
import { Tab, TabPanel } from "react-tabs";




var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const Home = () => {

    const [activeTab, setActiveTab] = useState(1);
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

    const bannerSlides = {
        0: {
            items: 1,
            margin: 0,
        },
    };


    const categorySlides = {
        0: {
            items: 1,
            margin: 0,
        },
        768: {
            items: 1,
            margin: 0,
        },
        1024: {
            items: 5,
            margin: 0,
        },
    };

    const topics = ['All', 'Vegetables', 'Fruits', 'Bread', 'Meat'];


    return (
        <>
            <main>
                <section>
                    <OwlCarousel responsive={bannerSlides} className="bannerSlider" center loop autoplay nav={true} dots={false} animateOut="fadeOut" animateIn="fadeIn"
                        navText={[
                            renderToStaticMarkup(<AiOutlineLeft />),
                            renderToStaticMarkup(<AiOutlineRight />),
                        ]}>
                        <div className="owlItems">
                            <img src="/assets/img/slide-1.jpg" alt="banner1" />

                            <div className="_wtContent">
                                <div className="_wtContent_innr">
                                    <div className="_wtContent_txts">
                                        <h2 className="philosopher-bold"><span>Organic</span> products</h2>
                                        <h2 className="philosopher-bold">directly from the farm.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owlItems">
                            <img src="/assets/img/slide-2.jpg" alt="banner2" />

                            <div className="_wtContent">
                                <div className="_wtContent_innr">
                                    <div className="_wtContent_txts">
                                        <h2 className="philosopher-bold">Fresh fruits <span>products</span></h2>
                                        <h2 className="philosopher-bold">Freshly grown for clients.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owlItems">
                            <img src="/assets/img/slide-3.jpg" alt="banner3" />

                            <div className="_wtContent">
                                <div className="_wtContent_innr">
                                    <div className="_wtContent_txts">
                                        <h2 className="philosopher-bold">Different  <span>crops</span></h2>
                                        <h2 className="philosopher-bold">Over 50 different crops.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owlItems">
                            <img src="/assets/img/slide-4.jpg" alt="banner4" />

                            <div className="_wtContent">
                                <div className="_wtContent_innr">
                                    <div className="_wtContent_txts">
                                        <h2 className="philosopher-bold">Organic <span>foods</span></h2>
                                        <h2 className="philosopher-bold">The natural ingredients.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </section>

                <section className=" py-28 relative">
                    <div className="__mainContainer">
                        <div className="pb-4">
                            <div className="flex text-[#7cc000] items-center">
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span>
                            </div>
                            <h2 className="text-[40px] font-bold mb-[.5rem]">Popular Categories</h2>
                        </div>
                        <OwlCarousel responsive={categorySlides} className="categorySlider" center loop autoplay nav={true}
                            navText={[
                                renderToStaticMarkup(<FaArrowLeft />),
                                renderToStaticMarkup(<FaArrowRight />),
                            ]}>
                            <div className="owlItems">
                                <Link href="#">
                                    <div className="item_image_content">
                                        <img src="/assets/img/cat1.png" className="" alt="cat1" />
                                        <h6>Awesome Broccoli</h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="owlItems">
                                <Link href="#">
                                    <div className="item_image_content">
                                        <img src="/assets/img/cat2.png" className="" alt="cat2" />
                                        <h6>Awesome Broccoli</h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="owlItems">
                                <Link href="#">
                                    <div className="item_image_content">
                                        <img src="/assets/img/cat3.png" className="" alt="cat3" />
                                        <h6>Awesome Broccoli</h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="owlItems">
                                <Link href="#">
                                    <div className="item_image_content">
                                        <img src="/assets/img/cat4.png" className="" alt="cat4" />
                                        <h6>Awesome Broccoli</h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="owlItems">
                                <Link href="#">
                                    <div className="item_image_content">
                                        <img src="/assets/img/cat5.png" className="" alt="cat5" />
                                        <h6>Awesome Broccoli</h6>
                                    </div>
                                </Link>
                            </div>
                        </OwlCarousel>
                    </div>
                    <img src="/assets/img/shape3.png" alt="shape3" className="category_left_thumb" />
                </section>

                <section className="p-[10px_0px_60px]">
                    <div className="__mainContainer">
                        <div className="pb-3.5">
                            <div className="flex text-[#7cc000] items-center">
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span>
                            </div>
                            <h2 className="text-[40px] font-bold mb-[.5rem]">Our Organic Products</h2>
                        </div>
                        <CommonTabs
                            classNameDyn="__commonTabBx __productFilts"
                            buttons={
                                <>
                                    {topics.map((topic) => (
                                        <Tab key={topic}>
                                            <button>{topic.charAt(0).toUpperCase() + topic.slice(1)}</button>
                                        </Tab>
                                    ))}
                                </>
                            }>
                            <TabPanel >
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                    <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                    <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                    <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                    <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                    <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                    <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                    <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                    <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel >Vegetables</TabPanel>
                            <TabPanel >Fruits</TabPanel>
                            <TabPanel >Bread</TabPanel>
                            <TabPanel >Meat</TabPanel>
                        </CommonTabs>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home