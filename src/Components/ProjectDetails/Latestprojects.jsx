import projects from "./Projectdata";

const LatestProjects = () => {
    // Open the project page in a new browser tab
    const handleView = (id) => {
        window.open(`/project/${id}`, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="latest-projects"
            className="
                w-full
                bg-[#E6E4DF]
                px-4
                py-6

                sm:px-6
                sm:py-8

                md:px-8
                md:py-10

                lg:px-10
                lg:py-6
            "
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            {/* ================= HEADING ================= */}
            <div
                className="
                    mb-6
                    text-center

                    sm:mb-7
                    md:mb-8

                    lg:mb-6
                "
            >
                <p
                    className="
                        mb-1
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-[#0F1418]/60

                        sm:text-sm
                    "
                >
                    What We Have Built
                </p>

                <h2
                    className="
                        text-3xl
                        font-light
                        tracking-wide
                        text-[#0F1418]

                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                    "
                >
                    Latest Projects
                </h2>

                <div
                    className="
                        mx-auto
                        mt-2
                        h-1
                        w-12
                        bg-[#F2B705]

                        sm:w-16
                    "
                />
            </div>

            {/* ================= PROJECTS GRID ================= */}
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1500px]
                    grid-cols-2
                    gap-3

                    sm:gap-5

                    md:grid-cols-3
                    md:gap-6

                    lg:gap-7
                "
            >
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="
                            group
                            flex
                            w-full
                            flex-col
                            overflow-hidden
                            rounded-lg
                            bg-white
                            shadow-[0_6px_20px_rgba(15,20,24,0.12)]
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_12px_30px_rgba(15,20,24,0.18)]

                            sm:rounded-xl
                        "
                    >
                        {/* ================= PROJECT IMAGE ================= */}
                        <div
                            className="
                                aspect-[16/9]
                                w-full
                                overflow-hidden
                                bg-[#D5D3CE]
                            "
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>

                        {/* ================= PROJECT DETAILS ================= */}
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                gap-2
                                px-3
                                py-3

                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                                sm:gap-2
                                sm:px-4
                                sm:py-3

                                md:px-5
                                md:py-3.5
                            "
                        >
                            {/* ================= PROJECT TITLE ================= */}
                            <h3
                                className="
                                    w-full
                                    text-center
                                    text-xs
                                    font-medium
                                    tracking-wide
                                    text-[#0F1418]

                                    sm:w-auto
                                    sm:text-left
                                    sm:text-sm

                                    md:text-base
                                "
                            >
                                {project.title}
                            </h3>

                            {/* ================= VIEW MORE BUTTON ================= */}
                            <button
                                onClick={() => handleView(project.id)}
                                type="button"
                                className="
                                    shrink-0
                                    rounded-md
                                    bg-[#F2B705]
                                    px-4
                                    py-1.5
                                    text-[10px]
                                    font-medium
                                    tracking-wide
                                    text-[#0F1418]
                                    transition
                                    duration-200

                                    hover:-translate-y-0.5
                                    hover:bg-[#FFC929]

                                    sm:px-4
                                    sm:py-2
                                    sm:text-xs

                                    md:px-5
                                    md:py-2
                                    md:text-sm
                                "
                            >
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestProjects;