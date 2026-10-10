import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "./projectdata";

const ViewMore = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => p.id === Number(id));
    const slides = project?.presentation ?? [];

    const SLIDE_INTERVAL = 3000;
    const SLIDE_SPEED = 700;

    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [animate, setAnimate] = useState(true);

    // Scroll to top when View More page opens
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Go back to Latest Projects section
    const handleBack = () => {
        navigate("/");

        setTimeout(() => {
            document
                .getElementById("latest-projects")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 100);
    };

    // Auto slider
    useEffect(() => {
        if (!slides.length || paused) return;

        const timer = setInterval(() => {
            setCurrent((prev) => prev + 1);
        }, SLIDE_INTERVAL);

        return () => clearInterval(timer);
    }, [paused, slides.length]);

    // Seamless slider loop
    useEffect(() => {
        if (current !== slides.length) return;

        const timeout = setTimeout(() => {
            setAnimate(false);
            setCurrent(0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setAnimate(true);
                });
            });
        }, SLIDE_SPEED);

        return () => clearTimeout(timeout);
    }, [current, slides.length]);

    // Project not found
    if (!project) {
        return (
            <section
                className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0F1418] px-6 text-center text-[#E6E4DF]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
            >
                <h1 className="mb-4 text-3xl font-light sm:text-4xl">
                    Project Not Found
                </h1>

                <p className="mb-8 max-w-md text-sm leading-7 text-[#E6E4DF]/60 sm:text-base">
                    The project you are looking for does not exist or may have
                    been removed.
                </p>

                <button
                    onClick={handleBack}
                    className="
                        rounded-full
                        border border-[#F2B705]
                        px-6 py-3
                        text-sm font-medium
                        text-[#F2B705]
                        transition-all duration-300
                        hover:bg-[#F2B705]
                        hover:text-[#0F1418]
                    "
                >
                    Back to Projects
                </button>
            </section>
        );
    }

    return (
        <section
            className="relative isolate min-h-screen w-full overflow-x-hidden bg-[#0F1418] text-[#E6E4DF]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            {/* ================= HEADER ================= */}
            <div className="flex w-full justify-center px-3 pt-5 sm:px-5 sm:pt-7">
                <header
                    className="
                        flex w-[96%] items-center justify-between
                        rounded-xl border border-white/20
                        bg-[#0F1418]/45
                        px-4 py-3
                        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                        backdrop-blur-md
                        sm:w-[90%] sm:px-5
                        md:w-[88%]
                        lg:w-[80%]
                    "
                >
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6E4DF] p-1.5 sm:h-10 sm:w-10">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <span className="text-sm font-medium tracking-wide text-[#E6E4DF] sm:text-base">
                            Your Company Name
                        </span>
                    </div>

                    {/* Options */}
                    <button
                        className="
                            rounded-full
                            border border-white/20
                            bg-white/5
                            px-4 py-2
                            text-xs font-medium
                            tracking-wide
                            text-[#E6E4DF]
                            transition-all duration-300
                            hover:border-[#F2B705]
                            hover:bg-[#F2B705]
                            hover:text-[#0F1418]
                            sm:px-5 sm:text-sm
                        "
                    >
                        Options
                    </button>
                </header>
            </div>

            {/* ================= BACK BUTTON ================= */}
            <div className="flex w-full justify-center px-3 pt-6 sm:px-5 sm:pt-8">
                <div className="w-[96%] sm:w-[90%] md:w-[88%] lg:w-[80%]">
                    <button
                        onClick={handleBack}
                        className="
                            group
                            inline-flex items-center gap-2
                            rounded-full
                            border border-white/20
                            bg-transparent
                            px-4 py-2
                            text-xs font-medium
                            tracking-wide
                            text-[#E6E4DF]/80
                            transition-all duration-300
                            hover:border-[#F2B705]
                            hover:bg-[#F2B705]
                            hover:text-[#0F1418]
                            sm:px-5 sm:py-2.5 sm:text-sm
                        "
                    >
                        <span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                        </span>

                        Back to Projects
                    </button>
                </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="mx-auto w-[96%] py-6 sm:w-[90%] sm:py-8 md:w-[88%] md:py-10 lg:w-[80%]">

                {/* ================= PROJECT IMAGES ================= */}
                <section>
                    <div className="mb-5 flex items-end justify-between sm:mb-7">
                        <div>
                            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#F2B705] sm:text-xs">
                                Gallery
                            </p>

                            <h2 className="text-2xl font-light tracking-tight text-[#E6E4DF] sm:text-3xl md:text-4xl">
                                Project Images
                            </h2>
                        </div>
                    </div>

                    <div
                        className="
                            flex
                            gap-4
                            overflow-x-auto
                            pb-4
                            snap-x snap-mandatory
                            scrollbar-thin
                            scrollbar-track-[#1B2329]
                            scrollbar-thumb-[#F2B705]
                            sm:gap-5
                        "
                    >
                        {project.images?.map((image, index) => (
                            <div
                                key={index}
                                className="
                                    group
                                    relative
                                    w-[82%]
                                    shrink-0
                                    snap-center
                                    overflow-hidden
                                    rounded-2xl
                                    border border-white/10
                                    bg-[#1B2329]
                                    shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                                    sm:w-[55%]
                                    md:w-[42%]
                                    lg:w-[32%]
                                "
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`${project.title} ${index + 1}`}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />
                                </div>

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1418]/40 via-transparent to-transparent opacity-70" />

                                <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#0F1418]/70 px-3 py-1 text-[10px] tracking-wide text-[#E6E4DF]/80 backdrop-blur-sm">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= DIVIDER ================= */}
                <div className="my-8 border-t border-[#F2B705]/40 sm:my-10" />

                {/* ================= PROJECT DESCRIPTION ================= */}
                <section>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#F2B705] sm:text-xs">
                        About the project
                    </p>

                    <h2 className="mb-6 text-2xl font-light tracking-tight text-[#E6E4DF] sm:text-3xl md:text-4xl">
                        {project.title}
                    </h2>

                    <div className="max-w-4xl space-y-4">
                        {project.description?.map((paragraph, index) => (
                            <p
                                key={index}
                                className="
                                    text-sm
                                    font-light
                                    leading-7
                                    text-[#E6E4DF]/70
                                    sm:text-base
                                    sm:leading-8
                                "
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* ================= DIVIDER ================= */}
                <div className="my-8 border-t border-[#F2B705]/40 sm:my-10" />

                {/* ================= PROJECT PRESENTATION ================= */}
                <section>
                    <div className="mb-5 sm:mb-7">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#F2B705] sm:text-xs">
                            Visual Presentation
                        </p>

                        <h2 className="text-2xl font-light tracking-tight text-[#E6E4DF] sm:text-3xl md:text-4xl">
                            Project Presentation
                        </h2>
                    </div>

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            border border-white/10
                            bg-[#1B2329]
                            shadow-[0_15px_45px_rgba(0,0,0,0.3)]
                        "
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        onTouchStart={() => setPaused(true)}
                        onTouchEnd={() => setPaused(false)}
                    >
                        <div className="aspect-[16/10] sm:aspect-video">
                            <div
                                className="flex h-full"
                                style={{
                                    transform: `translateX(-${current * 100}%)`,
                                    transition: animate
                                        ? `transform ${SLIDE_SPEED}ms ease-in-out`
                                        : "none",
                                }}
                            >
                                {[...slides, slides[0]].map((slide, index) => (
                                    <div
                                        key={index}
                                        className="h-full w-full shrink-0"
                                    >
                                        <img
                                            src={slide}
                                            alt={`${project.title} presentation ${index + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1418]/60 via-transparent to-transparent" />

                        {/* Slide Number */}
                        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0F1418]/70 px-3 py-1.5 text-[10px] tracking-wide text-[#E6E4DF]/80 backdrop-blur-md sm:left-5 sm:top-5">
                            {String(
                                (current % slides.length) + 1
                            ).padStart(2, "0")}{" "}
                            /{" "}
                            {String(slides.length).padStart(2, "0")}
                        </div>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`
                                        h-1.5 rounded-full
                                        transition-all duration-300
                                        ${
                                            current % slides.length === index
                                                ? "w-7 bg-[#F2B705]"
                                                : "w-1.5 bg-[#E6E4DF]/50 hover:bg-[#E6E4DF]"
                                        }
                                    `}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom spacing */}
                <div className="h-[3vh] min-h-6 sm:h-[5vh]" />
            </div>
        </section>
    );
};

export default ViewMore;