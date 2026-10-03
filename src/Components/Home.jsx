import home from "../assets/home.mp4";

const Home = ({ onContactClick = () => {} }) => {
    return (
        <section
            className="relative isolate min-h-screen w-full overflow-hidden bg-[#0F1418] text-[#E6E4DF]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            {/* Background video */}
            <video
                className="absolute inset-0 -z-20 h-full w-full object-cover"
                src={home}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div
                className="
                    absolute inset-0 -z-10
                    bg-[linear-gradient(
                        to_bottom,
                        rgba(15,20,24,0.6),
                        rgba(15,20,24,0.15)_35%,
                        rgba(15,20,24,0.2)_65%,
                        rgba(15,20,24,0.7)
                    )]
                "
            />

            {/* 40% Hero Area */}
            <div
                className="
                    mx-auto
                    flex
                    h-[40vh]
                    w-full
                    flex-col
                    items-center
                    px-4
                    pt-5

                    sm:pt-6
                    md:pt-8
                    lg:pt-[5vh]
                "
            >
                {/* Header */}
                <header
                    className="
                        flex
                        w-[92%]
                        shrink-0
                        items-center
                        justify-between
                        rounded-xl
                        border border-white/20
                        bg-[#0F1418]/45
                        px-4 py-3
                        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                        backdrop-blur-md

                        sm:w-[90%]
                        sm:px-5 sm:py-3

                        md:w-[88%]
                        md:px-6 md:py-4

                        lg:w-[80%]
                        lg:rounded-2xl
                    "
                >
                    {/* Logo + Company Name */}
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <div
                            className="
                                flex h-10 w-10
                                shrink-0
                                items-center justify-center
                                rounded-lg
                                bg-[#E6E4DF]
                                p-1.5

                                sm:h-12 sm:w-12
                                sm:rounded-xl
                                sm:p-2

                                md:h-14 md:w-14
                            "
                        >
                            <img
                                src="/logo.png"
                                alt="Company logo"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <h1
                            className="
                                truncate
                                text-lg
                                font-medium
                                tracking-wide

                                sm:text-2xl
                                md:text-3xl
                                lg:text-4xl
                            "
                        >
                            Your Company Name
                        </h1>
                    </div>

                    {/* Options */}
                    <div className="shrink-0">
                        <div
                            className="
                                rounded-full
                                border border-[#E6E4DF]/30
                                bg-white/10
                                px-3 py-1.5
                                text-sm
                                font-light
                                tracking-wide
                                text-[#E6E4DF]/85

                                sm:px-4 sm:py-2
                                sm:text-base

                                md:px-5
                                md:text-lg
                            "
                        >
                            Options
                        </div>
                    </div>
                </header>

                {/* Tagline + Button */}
                <div
                    className="
                        flex
                        min-h-0
                        w-full
                        flex-1
                        flex-col
                        items-center
                        justify-center
                        text-center
                    "
                >
                    {/* Tagline */}
                    <p
                        className="
                            flex
                            max-w-full
                            flex-wrap
                            items-center
                            justify-center
                            gap-x-4
                            gap-y-2
                            text-4xl
                            font-light
                            leading-tight
                            tracking-[0.03em]
                            drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]

                            sm:gap-x-5
                            sm:text-5xl

                            md:gap-x-6
                            md:text-6xl

                            lg:gap-x-7
                            lg:text-8xl
                        "
                    >
                        <span>Structures</span>

                        <span
                            aria-hidden="true"
                            className="
                                h-2 w-2
                                rotate-45
                                bg-[#F2B705]

                                sm:h-2.5 sm:w-2.5
                                md:h-3 md:w-3
                                lg:h-3.5 lg:w-3.5
                            "
                        />

                        <span>Strength</span>

                        <span
                            aria-hidden="true"
                            className="
                                h-2 w-2
                                rotate-45
                                bg-[#F2B705]

                                sm:h-2.5 sm:w-2.5
                                md:h-3 md:w-3
                                lg:h-3.5 lg:w-3.5
                            "
                        />

                        <span>Stability</span>
                    </p>

                    {/* Contact */}
                    <button
                        type="button"
                        onClick={onContactClick}
                        className="
                            mt-6
                            rounded-lg
                            bg-[#F2B705]
                            px-8 py-3
                            text-lg
                            font-medium
                            tracking-wide
                            text-[#0F1418]
                            shadow-[0_8px_30px_rgba(242,183,5,0.35)]
                            transition
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-[#FFC929]
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[#E6E4DF]

                            sm:mt-7
                            sm:px-10
                            sm:text-xl

                            md:mt-8
                            md:px-12
                            md:py-3.5
                            md:text-2xl
                        "
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;