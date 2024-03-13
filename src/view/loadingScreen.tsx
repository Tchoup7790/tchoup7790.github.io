import {useEffect, useState} from "react";
import { motion } from 'framer-motion';
import SpinningLoader from "../components/spinningLoader.tsx";

function LoadingScreen() {
    /**
     * Loading state function to check if all images are loaded
     */

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const imgElements = Array.from(document.images);
        const totalImages = imgElements.length;
        let loadedImages = 0;

        const onImageLoad = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                setLoading(true);
            }
        };

        imgElements.forEach((img) => {
            if (img.complete) {
                onImageLoad();
            } else {
                img.addEventListener('load', onImageLoad);
            }
        });


        imgElements.forEach((img) => img.removeEventListener('load', onImageLoad));
        }, []);

    return (
        <>
            {isLoading ? (
                <main className="loadingScreen">
                    <SpinningLoader/>
                    <motion.h1
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: .7}}
                    >Images Loading</motion.h1>
                </main>
            ):null}
        </>
    )
}

export default LoadingScreen;