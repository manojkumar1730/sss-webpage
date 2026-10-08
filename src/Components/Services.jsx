const Services = () => {
    const services = [
        {
            no: "01",
            title: "Structural Analysis & Design",
            description:
                "RCC and steel structural analysis and design for residential and commercial buildings.",
            deliverables:
                "Analysis Reports · Design Calculations · Structural Drawings",
        },
        {
            no: "02",
            title: "Detailing & Working Drawings",
            description:
                "Construction-ready structural drawings for beams, columns, slabs and foundations.",
            deliverables:
                "GA Drawings · Reinforcement Details · Working Drawings",
        },
        {
            no: "03",
            title: "Architectural Coordination",
            description:
                "Structural solutions coordinated with architectural layouts and design requirements.",
            deliverables:
                "Structural Grids · Coordination Drawings · Design Coordination",
        },
        {
            no: "04",
            title: "Foundation Design",
            description:
                "Safe and efficient foundation systems designed according to structural requirements.",
            deliverables:
                "Footings · Raft Foundations · Foundation Details",
        },
        {
            no: "05",
            title: "Structural Assessment",
            description:
                "Evaluation of existing structures with recommendations for suitable structural solutions.",
            deliverables:
                "Inspection · Assessment · Technical Recommendations",
        },
        {
            no: "06",
            title: "Construction & Site Support",
            description:
                "Technical support throughout the construction stage including site queries, revisions and clarifications.",
            deliverables:
                "Site Queries · Design Revisions · Technical Clarifications",
        },
    ];

    return (
        <section
            id="services"
            className="
                w-full
                bg-[#E6E4DF]
                px-5
                py-12

                sm:px-8
                sm:py-14

                md:px-12
                md:py-16

                lg:px-16
                lg:py-20
            "
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            {/* ================= HEADER ================= */}
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1500px]
                "
            >
                {/* Small heading */}
                <p
                    className="
                        mb-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#F2B705]

                        sm:text-sm
                    "
                >
                    Services
                </p>

                {/* Main heading */}
                <h2
                    className="
                        text-4xl
                        font-light
                        tracking-tight
                        text-[#0F1418]

                        sm:text-5xl

                        md:text-6xl

                        lg:text-7xl
                    "
                >
                    What We Do
                </h2>

                {/* Subtitle */}
                <p
                    className="
                        mt-3
                        max-w-2xl
                        text-base
                        font-light
                        leading-relaxed
                        text-[#0F1418]/60

                        sm:text-lg

                        md:text-xl

                        lg:text-2xl
                    "
                >
                    Structural design & detailing, start to finish
                </p>
            </div>

            {/* ================= SERVICES ================= */}
            <div
                className="
                    mx-auto
                    mt-10
                    w-full
                    max-w-[1500px]

                    sm:mt-12

                    md:mt-14

                    lg:mt-16
                "
            >
                {services.map((service) => (
                    <div
                        key={service.no}
                        className="
                            group
                            relative
                            grid
                            grid-cols-1
                            gap-4
                            border-t
                            border-[#0F1418]/20
                            py-7
                            transition
                            duration-300

                            sm:py-8

                            md:grid-cols-[100px_1fr]
                            md:gap-6

                            lg:grid-cols-[120px_420px_1fr]
                            lg:items-start
                            lg:gap-8
                            lg:py-9
                        "
                    >
                        {/* ================= NUMBER ================= */}
                        <div
                            className="
                                text-3xl
                                font-medium
                                tracking-tight
                                text-[#F2B705]

                                sm:text-4xl

                                md:text-5xl
                            "
                        >
                            {service.no}
                        </div>

                        {/* ================= SERVICE TITLE ================= */}
                        <div>
                            <h3
                                className="
                                    text-xl
                                    font-medium
                                    tracking-tight
                                    text-[#0F1418]
                                    transition
                                    duration-300
                                    group-hover:translate-x-1

                                    sm:text-2xl

                                    md:text-3xl

                                    lg:text-2xl
                                "
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="
                                    mt-2
                                    max-w-xl
                                    text-sm
                                    font-light
                                    leading-relaxed
                                    text-[#0F1418]/60

                                    sm:text-base

                                    md:text-lg

                                    lg:hidden
                                "
                            >
                                {service.description}
                            </p>
                        </div>

                        {/* ================= DESCRIPTION + DELIVERABLES ================= */}
                        <div
                            className="
                                hidden
                                lg:block
                            "
                        >
                            <p
                                className="
                                    max-w-2xl
                                    text-lg
                                    font-light
                                    leading-relaxed
                                    text-[#0F1418]/65
                                "
                            >
                                {service.description}
                            </p>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    font-medium
                                    tracking-wide
                                    text-[#0F1418]/70
                                "
                            >
                                <span className="text-[#F2B705]">
                                    Deliverables:
                                </span>{" "}
                                {service.deliverables}
                            </p>
                        </div>

                        {/* ================= MOBILE DELIVERABLES ================= */}
                        <p
                            className="
                                text-xs
                                font-medium
                                leading-relaxed
                                tracking-wide
                                text-[#0F1418]/55

                                sm:text-sm

                                lg:hidden
                            "
                        >
                            <span className="text-[#F2B705]">
                                Deliverables:
                            </span>{" "}
                            {service.deliverables}
                        </p>

                        {/* ================= HOVER ARROW ================= */}
                        <span
                            className="
                                absolute
                                right-0
                                top-8
                                hidden
                                text-2xl
                                font-light
                                text-[#F2B705]
                                opacity-0
                                transition
                                duration-300
                                group-hover:translate-x-1
                                group-hover:opacity-100

                                lg:block
                            "
                        >
                            →
                        </span>
                    </div>
                ))}

                {/* Bottom border */}
                <div className="border-t border-[#0F1418]/20" />
            </div>
        </section>
    );
};

export default Services;