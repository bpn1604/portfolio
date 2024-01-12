import React from "react";
import { motion } from "framer-motion";
import Paytm from "../assets/paytm.png"
const Card = () => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
        >
            <a href="hello">
                <img
                    class="rounded-t-lg w-full"
                    src={Paytm}
                    alt=""
                />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        CreadoBeauty Clone
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Credobeauty is online e-commerce website for beauty products. This project is about building a web application to buy wide variety of beauty products.
                </p>
                <a href="#">
                    <h1 class="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                        Tech Stack : <span class="text-sm" >HTML, CSS , Advance JS, Bootstarp , mongoDB, Express JS</span>
                    </h1>
                </a>

                <div
                    style={{ marginRight: "40px" }}
                    onClick={() => {
                        const url = "https://astonishing-malasada-d8cb34.netlify.app/"
                        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
                        if (newWindow) newWindow.opener = null

                    }}


                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    Link to website
                    <svg
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>


                <div
                    style={{ marginRight: "40px" }}
                    onClick={() => {
                        const url = "https://github.com/Thannzz/credo-beauty-clone"
                        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
                        if (newWindow) newWindow.opener = null

                    }}


                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    Source Code
                    <svg
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
