import { useEffect, useRef, useState } from "react";
import faq from "../../assets/faq.png";
import "animate.css";

const Faq = () => {
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
        <div ref={sectionRef} className="w-[1200px] mx-auto mt-20 mb-12">
            <h2 className="text-center text-3xl font-bold mb-8">
                Have Any <span className="text-[#f18148]">Question</span> On Your Mind?
            </h2>
            <div className="flex gap-20">
                <div
                    className={`card w-[500px] bg-[#f0f6fa] shadow-2xl transition-opacity duration-700 ${
                        isVisible ? "animate__animated animate__backInUp" : "opacity-0"
                    }`}
                >
                    <div className="px-10 pb-5 rounded-xl">
                        <img className="w-[350px]" src={faq} alt="" />
                        <h4 className="text-xl font-bold">More Question?</h4>
                        <form className="fieldset">
                            <input type="text" className="input" placeholder="Name" />
                            <input type="email" className="input" placeholder="Email" />
                            <textarea className="textarea" placeholder="Comment"></textarea>
                            <button className="btn bg-[#b1f315] border-0 mt-4">Sent message</button>
                        </form>
                    </div>
                </div>
                <div>
                    <div
                        className={`join join-vertical bg-base-100 transition-opacity duration-700 ${
                            isVisible ? "animate__animated animate__backInUp" : "opacity-0"
                        }`}
                    >
                        {[
                            {
                                question: "What are the essential tools for beginners in painting and drawing?",
                                answer: "Beginners should start with basic tools like pencils (HB, 2B, 4B), sketchbooks, erasers, brushes, acrylic or watercolor paints, and a good canvas or drawing paper.",
                            },
                            {
                                question: "Which type of paint is best for beginners—acrylic, watercolor, or oil?",
                                answer: "Acrylic is best for beginners because it dries quickly and is easy to work with. Watercolors are great for soft and transparent effects, while oil paints offer rich textures but take longer to dry.",
                            },
                            {
                                question: "How can I improve my drawing skills?",
                                answer: "Practice daily, start with basic shapes, observe real-life objects, study perspective, and try different techniques like shading and hatching. Online tutorials and art classes also help.",
                            },
                            {
                                question: "What is the difference between sketching and drawing?",
                                answer: "Sketching is a rough and quick form of drawing used to capture an idea, while drawing is a more detailed and refined piece of art.",
                            },
                            {
                                question: "How do I choose the right brush for painting?",
                                answer: "Choose a brush based on the type of paint—soft bristles for watercolors, stiff bristles for acrylics, and natural bristles for oil paints. Different brush shapes (round, flat, filbert) create various effects.",
                            },
                            {
                                question: "How do I preserve my artwork for a long time?",
                                answer: "Use fixatives for drawings, varnish for paintings, store artwork in a dry and cool place, and frame pieces with UV-protected glass.",
                            },
                            {
                                question: "Can I sell my artwork online?",
                                answer: "Yes! You can sell artwork on platforms like Etsy, DeviantArt, Instagram, or through your own website. Marketing and building a strong portfolio help attract buyers.",
                            },
                            {
                                question: "How can I overcome artist's block?",
                                answer: "Try experimenting with new styles, taking a break, observing nature, getting inspiration from other artists, and setting small creative challenges for yourself.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
                                <div className="collapse-title font-semibold">{faq.question}</div>
                                <div className="collapse-content text-sm">{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
