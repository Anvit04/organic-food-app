"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight, FaQuoteLeft, FaRegCircle, FaRegStar, FaSearch, FaShoppingBag, FaStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { renderToStaticMarkup } from "react-dom/server";
import React, { useState } from 'react'
import Link from "next/link";
import { CommonTabs } from "@/common/commonTabs";
import { Tab, TabPanel } from "react-tabs";
import { YouTubeEmbed } from "@/common/youTube_embed";

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
            center: true,
        },
        660: {
            items: 2,
            margin: 0,
            center: true,
        },
        868: {
            items: 3,
            margin: 0,
            center: true,
        },
        1024: {
            items: 3,
            margin: 0,
            center: true,
        },
        1300: {
            items: 5,
            margin: 0,
        },
    };

    const testimonialSlides = {
        0: {
            items: 1,
            margin: 0,
        },
        768: {
            items: 1,
            margin: 0,
        },
        1024: {
            items: 1,
            margin: 0,
        },
    };

    const topics = ['All', 'Vegetables', 'Fruits', 'Bread', 'Meat'];

    const freshCategory = [
        {
            name: 'Vegetables',
            image: '/assets/img/ctg_icon1.png',
            count: 40,
        },
        {
            name: 'Fresh Fruits',
            image: '/assets/img/ctg_icon2.png',
            count: 30,
        },
        {
            name: 'Beverages',
            image: '/assets/img/ctg_icon3.png',
            count: 30,
        },
        {
            name: 'Babies & Kids',
            image: '/assets/img/ctg_icon4.png',
            count: 10,
        },
        {
            name: 'Frozen Foods',
            image: '/assets/img/ctg_icon5.png',
            count: 20,
        },
    ];

    const youTubeUrls = [
        {
            videoId: 'dQw4w9WgXcQ',
            value: 1,
        },
        {
            videoId: 'dQw4w9WgXcQ',
            value: 2,
        },
        {
            videoId: 'dQw4w9WgXcQ',
            value: 3,
        },
    ]



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

                <section className="py-18 md:py-28 relative">
                    <div className="__mainContainer">
                        <div className="pb-4">
                            <div className="flex text-[#7cc000] items-center">
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span>
                            </div>
                            <h2 className="text-[26px] lg:text-[40px] font-bold mb-[.5rem] philosopher-bold">Popular Categories</h2>
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
                            <div className="flex text-[#7cc000] items-center justify-center lg:justify-start">
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span>
                            </div>
                            <h2 className="text-[26px] lg:text-[40px] font-bold mb-[.5rem] philosopher-bold text-center lg:text-left">Our Organic Products</h2>
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
                            <TabPanel>
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </CommonTabs>
                    </div>
                </section>

                <section className="quality_section">
                    <div className="quality_section_wrap">
                        <div className="__mainContainer">
                            <div className="quality_top_content text-center">
                                <div className="quality_sub_title ">
                                    <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                    <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                    <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                    <span className="text-[12px] font-medium px-2">FRESH FROM OUR FARM</span>
                                    <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                    <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                    <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                </div>
                                <div className="quality_top_title">
                                    <h2 className="text-[30px] lg:text-[45px] mb-[.5rem] philosopher-bold">Top Organic Quailty</h2>
                                </div>
                            </div>

                            <div className="quality_inner_content">
                                <div className="flex flex-wrap justify-center items-end gap-[24px]">
                                    <div className="w-full lg:w-[calc(33.33%-16px)]">
                                        <div className="flex justify-center items-start text-end pr-6">
                                            <div className="quality_text">
                                                <div className="quality_title">
                                                    <h4><span>Top Premium</span> Quality</h4>
                                                </div>

                                                <div className="quality_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                                                </div>
                                            </div>

                                            <div class="quality_img bg-white ml-6" >
                                                <img src="assets/img/qlty5.png" alt="qlty5" />
                                            </div>
                                        </div>

                                        <div className="flex justify-center items-start text-end my-6">
                                            <div className="quality_text">
                                                <div className="quality_title">
                                                    <h4><span>Always</span> Fresh Items</h4>
                                                </div>

                                                <div className="quality_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                                                </div>
                                            </div>

                                            <div class="quality_img bg-white ml-4" >
                                                <img src="assets/img/qlty6.png" alt="qlty6" />
                                            </div>
                                        </div>

                                        <div className="flex justify-center items-start text-end pr-6">
                                            <div className="quality_text">
                                                <div className="quality_title">
                                                    <h4><span>100%</span> Natural Product</h4>
                                                </div>

                                                <div className="quality_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                                                </div>
                                            </div>

                                            <div class="quality_img bg-white ml-6" >
                                                <img src="assets/img/qlty7.png" alt="qlty7" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-[calc(33.33%-16px)]">
                                        <div className="quality_middle_gallery">
                                            <img src="/assets/img/qlty2.png" alt="qlty2" />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-[calc(33.33%-16px)]">
                                        <div className="flex justify-center items-start pl-6">
                                            <div class="quality_img bg-white mr-6" >
                                                <img src="assets/img/qlty8.png" alt="qlty8" />
                                            </div>

                                            <div className="quality_text">
                                                <div className="quality_title">
                                                    <h4>100% Organic <span>Product</span></h4>
                                                </div>

                                                <div className="quality_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center items-start my-6">
                                            <div class="quality_img bg-white mr-6" >
                                                <img src="assets/img/qlty9.png" alt="qlty9" />
                                            </div>

                                            <div className="quality_text">
                                                <div className="quality_title">
                                                    <h4>Super <span>Healthy Food</span></h4>
                                                </div>

                                                <div className="quality_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center items-start pl-6">
                                            <div class="quality_img bg-white mr-6" >
                                                <img src="assets/img/qlty10.png" alt="qlty10" />
                                            </div>

                                            <div className="quality_text">
                                                <div className="quality_title">
                                                    <h4>Top Best <span>Quality</span></h4>
                                                </div>

                                                <div className="quality_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="produce_category_section">
                    <div className="__mainContainer">
                        <CommonTabs
                            classNameDyn="__commonTabBx __frsh_cateTabx"
                            buttons={
                                <>
                                    <div className="prdc_ctg_content">
                                        <div className="flex text-[#7cc000] items-center justify-center lg:justify-start">
                                            <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span>
                                        </div>
                                        <h2 className="text-[26px] lg:text-[40px] my-[.5rem] philosopher-bold leading-normal lg:leading-14 text-center lg:text-left">Fresh produce Categories</h2>

                                        <div className="prdc_ctg_desc py-2">
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a</p>
                                        </div>
                                    </div>

                                    {freshCategory.map((topic) => (
                                        <Tab key={topic.name}>
                                            <button className="">
                                                <div className="flex justify-center items-center">
                                                    <div className="prdc_ctg_icon ">
                                                        <img src={topic.image} alt={topic.name} className="" />
                                                    </div>
                                                    <div className="prdc_ctg_icon_title">
                                                        <h5>{topic.name}</h5>
                                                    </div>
                                                </div>

                                                <div className="prdc_ctg_icon_num">
                                                    <span>{topic.count}</span>
                                                </div>
                                            </button>
                                        </Tab>
                                    ))}
                                </>
                            }>
                            <div className="__frsh_cateTab_content">
                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </CommonTabs>
                    </div>
                </section>

                <section className="py-[100px] relative">
                    <div className='store_section_wrap'>
                        <div className='store_content'>
                            <div className="flex justify-center items-center gap-x-6 flex-wrap px-4 py-10 lg:py-16">
                                <div className='w-full lg:w-[calc(50%-12px)]'>
                                    <div className="store_thumb img_moving_anim1">
                                        <img src="assets/img/cover-img/slider4-layer3.png" alt='' />
                                        {/* <img src="assets/img/store4.png" alt='' /> */}
                                    </div>
                                </div>
                                <div className='w-full lg:w-[calc(50%-12px)]'>
                                    <div className="store_content_text">
                                        <div className="pb-3.5">
                                            <div className="flex text-[#7cc000] items-center justify-center lg:justify-start">
                                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                                <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span>
                                            </div>

                                            <div className='store_title text-effect py-2'>
                                                <h2 className="philosopher-bold">Trusted Organic&nbsp;<font><span>F</span><span>o</span><span>o</span><span>d</span></font>&nbsp;Store Conscious
                                                </h2>
                                            </div>

                                            <div className='store_desc mr-2'>
                                                <p>Apparently we had reached a great height in the atmosphere, for the sky was a
                                                    dead black, and the stars had ceased to twinkle. height in the atmosphere,
                                                    for the sky was a dead black, and the stars had</p>
                                            </div>

                                            <div className='store_item_content'>
                                                <div className="store_item">
                                                    <div className="store_item_img">
                                                        <Link href="#"><img src="assets/img/ctg_icon6.png" alt='' /></Link>
                                                    </div>
                                                    <div className='store_item_title'>
                                                        <span>Promotions Of The Week</span>
                                                    </div>
                                                </div>

                                                <div className="store_item">
                                                    <div className="store_item_img">
                                                        <Link href="#"><img src="assets/img/ctg_icon7.png" alt='' /></Link>
                                                    </div>
                                                    <div className='store_item_title'>
                                                        <span>Promotions Of The Week</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='store_btn text-center lg:text-left'>
                                                <Link href='#!' className=" inline-block cursor-pointer">
                                                    <button className='custom_btn'>
                                                        Subscribe
                                                        <span className="__lgArrow_icon "> <FaLongArrowAltRight /></span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='store_right_side_img'>
                            <img src='assets/img/shape21.png' alt='' />
                        </div>
                    </div>
                </section>

                <section className="__testMonial py-20">
                    <div className='__mainContainer'>
                        <div className="quality_top_content text-center mb-10">
                            <div className="quality_sub_title ">
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[12px] font-medium px-2 uppercase">testimonials</span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                            </div>
                            <div className="quality_top_title">
                                <h2 className="text-[30px] lg:text-[45px] mb-[.5rem] philosopher-bold">What People Think About</h2>
                            </div>
                        </div>

                        <OwlCarousel responsive={testimonialSlides} className="__testimonialSlider" center loop autoplay >
                            <div className="owlItems">
                                <div className='testimonial_layout_1 '>
                                    <div className='testimonial_author2 '>
                                        <img src='assets/img/testimonial3.png' alt='' />
                                        <div className='testimonial_back_img1 '>
                                            <img src='assets/img/shape32.png' alt='' />
                                        </div>
                                        <div className='testimonial_back_img2 '>
                                            <img src='assets/img/shape24.png' alt='' />
                                        </div>
                                    </div>
                                    <div className="testimonial_text">
                                        <span className='testimonial_qoute text-center md:text-left'>
                                            <FaQuoteLeft className="text-[#ff6363] text-[35px]" />
                                        </span>
                                        <div className='testimonial_comment py-4'>
                                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such personal touch.</p>
                                        </div>
                                        <div className='testimonial_author_title'>
                                            <h6>Shirley Smith <font> - Director</font></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owlItems">
                                <div className='testimonial_layout_1 '>
                                    <div className='testimonial_author2 '>
                                        <img src='assets/img/testimonial3.png' alt='' />
                                        <div className='testimonial_back_img1 '>
                                            <img src='assets/img/shape32.png' alt='' />
                                        </div>
                                        <div className='testimonial_back_img2 '>
                                            <img src='assets/img/shape24.png' alt='' />
                                        </div>
                                    </div>
                                    <div className="testimonial_text">
                                        <span className='testimonial_qoute text-center md:text-left'>
                                            <FaQuoteLeft className="text-[#ff6363] text-[35px]" />
                                        </span>
                                        <div className='testimonial_comment py-4'>
                                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such personal touch.</p>
                                        </div>
                                        <div className='testimonial_author_title'>
                                            <h6>Shirley Smith <font> - Director</font></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owlItems">
                                <div className='testimonial_layout_1 '>
                                    <div className='testimonial_author2 '>
                                        <img src='assets/img/testimonial3.png' alt='' />
                                        <div className='testimonial_back_img1 '>
                                            <img src='assets/img/shape32.png' alt='' />
                                        </div>
                                        <div className='testimonial_back_img2 '>
                                            <img src='assets/img/shape24.png' alt='' />
                                        </div>
                                    </div>
                                    <div className="testimonial_text">
                                        <span className='testimonial_qoute text-center md:text-left'>
                                            <FaQuoteLeft className="text-[#ff6363] text-[35px]" />
                                        </span>
                                        <div className='testimonial_comment py-4'>
                                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such personal touch.</p>
                                        </div>
                                        <div className='testimonial_author_title'>
                                            <h6>Shirley Smith <font> - Director</font></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className='service_setion sec_space_xs_70'>
                    <div className='service_content_wrap service_content_3 sec_space_xs_70'>
                        <div className='__mainContainer'>
                            <div className='flex justify-center lg:justify-between items-center flex-wrap flex-col sm:flex-row gap-y-5'>
                                <div className='service_inner_content'>
                                    <div className='service_inner_content3'>
                                        <div className='service_icon2 mb-2'>
                                            <img src='assets/img/service10.png' alt='' />
                                        </div>
                                        <div className='service_content '>
                                            <h6>Free Delivery</h6>
                                            <span>from $50</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='service_inner_content'>
                                    <div className='service_inner_content3'>
                                        <div className='service_icon2 mb-2'>
                                            <img src='assets/img/service11.png' alt='' />
                                        </div>
                                        <div className='service_content '>
                                            <h6>99 % Customer</h6>
                                            <span>Feedbacks</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='service_inner_content'>
                                    <div className='service_inner_content3'>
                                        <div className='service_icon2 mb-2'>
                                            <img src='assets/img/service12.png' alt='' />
                                        </div>
                                        <div className='service_content '>
                                            <h6>365 Days</h6>
                                            <span>for free return</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='service_inner_content'>
                                    <div className='service_inner_content3'>
                                        <div className='service_icon2 mb-2'>
                                            <img src='assets/img/service13.png' alt='' />
                                        </div>
                                        <div className='service_content '>
                                            <h6>Payment</h6>
                                            <span>Secure System</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='service_inner_content'>
                                    <div className='service_inner_content3'>
                                        <div className='service_icon2 mb-2'>
                                            <img src='assets/img/service14.png' alt='' />
                                        </div>
                                        <div className='service_content '>
                                            <h6>Only Best</h6>
                                            <span>Brands</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="__ut_bgImg_bx">
                        <div className='__ut_bg_overlay'></div>

                        <div className="__ut_bg_topShape">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
                                <path class="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>
                                <path class="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>
                                <path class="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>
                                <path class="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>
                                <path class="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>
                                <path class="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>
                                <path class="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>
                                <path class="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>
                                <path class="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>
                            </svg>
                        </div>

                        <div className="__ut_bg_bottomShape">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
                                <path class="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>
                                <path class="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>
                                <path class="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>
                                <path class="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>
                                <path class="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>
                                <path class="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>
                                <path class="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>
                                <path class="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>
                                <path class="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>
                            </svg>
                        </div>

                        <div className="__mainContainer relative">
                            <div className="p-[20px_20px_40px] sm:p-[40px_40px_40px] md:p-[50px_100px_40px] lg:p-[100px_100px_40px]">
                                <div className="quality_top_title text-center">
                                    <h2 className="text-[30px] lg:text-[45px] mb-[.5rem] philosopher-bold !text-white">Watch Product Videos</h2>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-5">
                                {youTubeUrls?.map((item, index) => {
                                    return (
                                        <div key={index} className="w-full md:w-[calc(33.33%-14px)]">
                                            <YouTubeEmbed videoId={item.videoId} />
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="my-5">
                                <div className="text-center">
                                <Link href='#!' className=" inline-block cursor-pointer">
                                    <button className='custom_btn'>
                                    View All Videos
                                        <span className="__lgArrow_icon "> <FaLongArrowAltRight /></span>
                                    </button>
                                </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='__orgVeg_blog'>
                    <div className='__mainContainer'>
                        <div className="quality_top_content text-center mb-10">
                            <div className="quality_sub_title ">
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[12px] font-medium px-2 uppercase">latest blog</span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                            </div>
                            <div className="quality_top_title">
                                <h2 className="text-[30px] lg:text-[45px] mb-[.5rem] philosopher-bold">What People Think About</h2>
                            </div>
                        </div>

                        <div className="blogRow">
                            <div className='inFx_blg'>
                                <div className='rdb_blogBx'>
                                    <div className='rdb_blogImg'>
                                        <Link href='#'>
                                            <img src="assets/img/gallery4.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="rdb_descBx">
                                        <div className='rdbDesc_head'>
                                            <h4 className='philosopher-bold'>All Natural Italian-Style Chicken Meatballs</h4>
                                            <p>Qui nunc nobis videntur parum clari, sollemnes in futurum
                                                putamus parum claram legere.</p>
                                        </div>
                                        <div className='rdb_bgFull'>
                                            <Link href='#'>Read More <span> <FaArrowRight /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='inFx_blg'>
                                <div className='rdb_blogBx'>
                                    <div className='rdb_blogImg'>
                                        <Link href='#'>
                                            <img src="assets/img/gallery6.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="rdb_descBx">
                                        <div className='rdbDesc_head'>
                                            <h4 className='philosopher-bold'>All Natural Italian-Style Chicken Meatballs</h4>
                                            <p>Qui nunc nobis videntur parum clari, sollemnes in futurum
                                                putamus parum claram legere.</p>
                                        </div>
                                        <div className='rdb_bgFull'>
                                            <Link href='#'>Read More <span> <FaArrowRight /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='inFx_blg'>
                                <div className='rdb_blogBx'>
                                    <div className='rdb_blogImg'>
                                        <Link href='#'>
                                            <img src="assets/img/instagram3.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="rdb_descBx">
                                        <div className='rdbDesc_head'>
                                            <h4 className='philosopher-bold'>All Natural Italian-Style Chicken Meatballs</h4>
                                            <p>Qui nunc nobis videntur parum clari, sollemnes in futurum
                                                putamus parum claram legere.</p>
                                        </div>
                                        <div className='rdb_bgFull'>
                                            <Link href='#'>Read More <span> <FaArrowRight /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='store_btn w-full text-center'>
                                <Link href='#!' className=" inline-block cursor-pointer">
                                    <button className='custom_btn'>
                                        View All
                                        <span className="__lgArrow_icon "> <FaLongArrowAltRight /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home