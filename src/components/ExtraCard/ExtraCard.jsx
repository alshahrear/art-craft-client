import { useEffect, useRef, useState } from "react";
import "animate.css";

const ExtraCard = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="w-[1200px] mx-auto mt-5 mb-10">
            <h2 className="text-3xl font-bold text-center mb-5">
                Transforming the <span className="text-[#f18148]">Art World</span> with <br /> AI-Powered Painting
            </h2>
            <div
                className={`flex gap-6 text-center transition-opacity duration-700 ${
                    isVisible ? "animate__animated animate__slideInLeft" : "opacity-0"
                }`}
            >
                <div>
                    <div className="relative bg-[#b1f315] px-5 py-10 rounded-r-full space-y-3">
                        <h4 className="text-lg font-bold">Inspiration Gathering</h4>
                        <p className="font-medium">AI-driven tools analyze artistic trends, colors, and styles to generate fresh ideas for painters.</p>
                    </div>
                    <span className="absolute -ml-10 -mt-8 bg-[#14173d] p-3 rounded-lg text-[#b1f315]">01</span>
                </div>
                <div>
                    <div className="bg-[#f0f6fa] relative px-5 py-10 rounded-l-full space-y-3">
                        <h4 className="text-lg font-bold">Smart Color Selection</h4>
                        <p className="font-medium">Machine learning suggests the perfect color combinations based on mood, theme, and artistic intent.</p>
                    </div>
                    <span className="bg-[#14173d] p-3 rounded-lg text-[#f0f6fa] absolute -ml-2 -mt-8">02</span>
                </div>
                <div>
                    <div className="bg-[#b1f315] relative px-5 py-10 rounded-r-full space-y-3">
                        <h4 className="text-lg font-bold">Automated Finishing</h4>
                        <p className="font-medium">AI assists in refining brush strokes, enhancing details, and adding the final artistic touches seamlessly.</p>
                    </div>
                    <span className="bg-[#14173d] p-3 rounded-lg text-[#b1f315] absolute -ml-10 -mt-8">03</span>
                </div>
                <div>
                    <div className="bg-[#f0f6fa] relative px-5 py-10 rounded-l-full space-y-3">
                        <h4 className="text-lg font-bold">Digital Sketching</h4>
                        <p className="font-medium">Using AI-based recommendations, artists can create digital sketches that enhance creativity and efficiency.</p>
                    </div>
                    <span className="bg-[#14173d] p-3 rounded-lg text-[#f0f6fa] absolute -ml-2 -mt-8">04</span>
                </div>
            </div>
        </div>
    );
};

export default ExtraCard;
