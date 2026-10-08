import Button from "@mui/material/Button";
import home from "../assets/home.mp4";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Home = ({ onContactClick = () => {} }) => {
    return (
        <section
            className="
                relative
                isolate
                min-h-screen
                w-full
                overflow-hidden
                bg-[#0F1418]
                text-[#E6E4DF]
            "
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >

            {/* ================= BACKGROUND VIDEO ================= */}
            <video
                className="
                    absolute
                    inset-0
                    -z-20
                    h-full
                    w-full
                    object-cover
                "
                src={home}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* ================= VIDEO OVERLAY ================= */}
            <div
                className="
                    absolute
                    inset-0
                    -z-10
                    bg-[linear-gradient(
                        to_bottom,
                        rgba(15,20,24,0.6),
                        rgba(15,20,24,0.15)_35%,
                        rgba(15,20,24,0.2)_65%,
                        rgba(15,20,24,0.7)
                    )]
                "
            />

            {/* ================= HERO AREA ================= */}
            <div
                className="
                    mx-auto
                    flex
                    h-[40vh]
                    w-full
                    flex-col
                    items-center
                    px-3
                    pt-5

                    sm:px-4
                    sm:pt-6

                    md:pt-8

                    lg:pt-[5vh]
                "
            >

                {/* ================= HEADER ================= */}
                <header
                    className="
                        flex
                        h-14
                        w-[96%]
                        shrink-0
                        items-stretch
                        justify-between
                        overflow-hidden
                        rounded-xl
                        border
                        border-white/20
                        bg-[#0F1418]/45
                        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                        backdrop-blur-md

                        sm:h-16
                        sm:w-[90%]

                        md:h-20
                        md:w-[88%]

                        lg:h-24
                        lg:w-[80%]
                        lg:rounded-2xl
                    "
                >

                    {/* ================= TEXT LOGO ================= */}
                    <div
                        className="
                            flex
                            h-full
                            w-[25%]
                            shrink-0
                            flex-col
                            justify-center
                            px-2

                            sm:w-[23%]
                            sm:px-3

                            md:w-[22%]

                            lg:w-[20%]
                        "
                    >

                        {/* SRIMAN */}
                        <div
                            className="
                                whitespace-nowrap
                                text-[20px]
                                font-extrabold
                                leading-[0.85]
                                tracking-[-0.08em]

                                min-[400px]:text-[23px]

                                sm:text-[31px]

                                md:text-[38px]

                                lg:text-[48px]
                            "
                        >
                            <span className="text-[#E73524]">
                                SRIM
                            </span>

                            <span className="text-[#777777]">
                                AN
                            </span>
                        </div>

                        {/* CONSULTANTS */}
                        <div
                            className="
                                mt-1
                                whitespace-nowrap
                                text-[5px]
                                font-light
                                tracking-[0.28em]
                                text-[#E6E4DF]

                                min-[400px]:text-[6px]

                                sm:text-[8px]
                                sm:tracking-[0.35em]

                                md:text-[10px]

                                lg:text-[12px]
                                lg:tracking-[0.42em]
                            "
                        >
                            CONSULTANTS
                        </div>

                    </div>


                    {/* ================= COMPANY NAME ================= */}
                    <div
                        className="
                            flex
                            min-w-0
                            flex-1
                            items-center
                            px-2

                            sm:px-4

                            md:px-5
                        "
                    >
                        <h1
                            className="
                                break-words
                                text-[11px]
                                font-medium
                                leading-tight
                                tracking-normal

                                min-[400px]:text-xs

                                sm:text-xl
                                sm:tracking-wide

                                md:text-2xl

                                lg:text-4xl
                            "
                        >
                            SRIMAN STRUCTURAL STUDIO
                        </h1>
                    </div>


                    {/* ================= MENU BUTTON ================= */}
                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            justify-center
                            pr-2

                            sm:pr-4

                            md:pr-5
                        "
                    >
                        <Button
                            variant="outlined"
                            aria-label="Open menu"
                            size="small"
                            sx={{
                                minWidth: "auto",

                                width: {
                                    xs: "38px",
                                    sm: "44px",
                                    md: "50px",
                                },

                                height: {
                                    xs: "38px",
                                    sm: "44px",
                                    md: "50px",
                                },

                                padding: 0,

                                color: "rgba(230,228,223,0.95)",

                                borderColor:
                                    "rgba(230,228,223,0.35)",

                                backgroundColor:
                                    "rgba(255,255,255,0.08)",

                                borderRadius: "9999px",

                                backdropFilter: "blur(4px)",

                                transition:
                                    "all 0.2s ease",

                                "&:hover": {
                                    borderColor: "#F2B705",

                                    backgroundColor:
                                        "rgba(242,183,5,0.15)",

                                    transform:
                                        "translateY(-1px)",
                                },
                            }}
                        >
                            <MenuOpenIcon
                                sx={{
                                    fontSize: {
                                        xs: 22,
                                        sm: 25,
                                        md: 28,
                                    },
                                }}
                            />
                        </Button>
                    </div>

                </header>


                {/* ================= TAGLINE + CONTACT ================= */}
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

                    {/* ================= TAGLINE ================= */}
                    <p
                        className="
                            flex
                            w-full
                            flex-nowrap
                            items-center
                            justify-center
                            gap-x-2
                            whitespace-nowrap
                            text-[17px]
                            font-light
                            leading-tight
                            tracking-[0.01em]
                            drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]

                            sm:gap-x-4
                            sm:text-4xl
                            sm:tracking-[0.02em]

                            md:gap-x-6
                            md:text-6xl

                            lg:gap-x-7
                            lg:text-8xl
                        "
                    >

                        <span>
                            Structures
                        </span>

                        <span
                            aria-hidden="true"
                            className="
                                h-1.5
                                w-1.5
                                shrink-0
                                rotate-45
                                bg-[#F2B705]

                                sm:h-2
                                sm:w-2

                                md:h-3
                                md:w-3

                                lg:h-3.5
                                lg:w-3.5
                            "
                        />

                        <span>
                            Strength
                        </span>

                        <span
                            aria-hidden="true"
                            className="
                                h-1.5
                                w-1.5
                                shrink-0
                                rotate-45
                                bg-[#F2B705]

                                sm:h-2
                                sm:w-2

                                md:h-3
                                md:w-3

                                lg:h-3.5
                                lg:w-3.5
                            "
                        />

                        <span>
                            Stability
                        </span>

                    </p>


                    {/* ================= CONTACT BUTTON ================= */}
                    <button
                        type="button"
                        onClick={onContactClick}
                        className="
                            mt-5
                            rounded-lg
                            bg-[#F2B705]
                            px-6
                            py-2.5
                            text-base
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
                            sm:py-3
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