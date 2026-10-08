import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";

const Team = () => {
    const teamMembers = [
        {
            image: team1,
            role: "Managing Director",
        },
        {
            image: team2,
            role: "Project Manager",
        },
        {
            image: team3,
            role: "Site Engineer",
        },
        {
            image: team4,
            role: "Civil Engineer",
        },
        {
            image: team5,
            role: "Architect",
        },
    ];

    return (
        <section
            className="
                min-h-screen
                w-full
                bg-[#E6E4DF]
                px-3
                py-10

                sm:px-6
                sm:py-12

                md:px-10
                md:py-14

                lg:min-h-0
                lg:px-12
                lg:py-8
            "
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            {/* ================= HEADING ================= */}
            <div
                className="
                    mb-8
                    text-center

                    sm:mb-10

                    md:mb-12

                    lg:mb-8
                "
            >
                <p
                    className="
                        mb-2
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-[#0F1418]/60

                        sm:text-sm

                        md:text-base
                    "
                >
                    The People Behind Our Work
                </p>

                <h2
                    className="
                        text-4xl
                        font-light
                        tracking-wide
                        text-[#0F1418]

                        sm:text-5xl

                        md:text-6xl

                        lg:text-6xl
                    "
                >
                    Our Team
                </h2>

                <div
                    className="
                        mx-auto
                        mt-4
                        h-1
                        w-14
                        bg-[#F2B705]

                        sm:w-20
                    "
                />
            </div>

            {/* ================= TEAM MEMBERS ================= */}
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1600px]
                    grid-cols-2
                    gap-3

                    sm:grid-cols-2
                    sm:gap-6

                    md:grid-cols-3
                    md:gap-8

                    lg:grid-cols-5
                    lg:gap-6

                    xl:gap-8
                "
            >
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="
                            w-full
                            overflow-hidden
                            rounded-xl
                            bg-white
                            shadow-[0_10px_35px_rgba(15,20,24,0.12)]
                            transition
                            duration-300
                            hover:-translate-y-2
                            hover:shadow-[0_18px_45px_rgba(15,20,24,0.20)]

                            sm:rounded-2xl
                        "
                    >
                        {/* ================= IMAGE ================= */}
                        <div
                            className="
                                aspect-[3/4]
                                w-full
                                overflow-hidden
                                bg-[#D5D3CE]
                            "
                        >
                            <img
                                src={member.image}
                                alt={member.role}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        </div>

                        {/* ================= DETAILS ================= */}
                        <div
                            className="
                                px-2
                                py-3
                                text-center

                                sm:px-6
                                sm:py-6
                            "
                        >
                            <h3
                                className="
                                    text-sm
                                    font-medium
                                    tracking-wide
                                    text-[#0F1418]

                                    sm:text-xl
                                "
                            >
                                Employee Name
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    font-light
                                    tracking-wide
                                    text-[#0F1418]/60

                                    sm:mt-2
                                    sm:text-base
                                "
                            >
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;