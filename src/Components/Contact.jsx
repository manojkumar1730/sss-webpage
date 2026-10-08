
import React, { useState } from "react";

const Contact = () => {
  // All form data stored in one object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    alert("Thank you! Your details have been submitted.");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <section className="w-full bg-[#0F1418] text-[#E6E4DF] px-5 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16">

      {/* ================= CONTACT FORM ================= */}
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Contact Us
          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Get in touch with us. We would love to hear from you.
          </p>
        </div>


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* ================= FIRST NAME ================= */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="firstName"
              className="text-sm font-medium"
            >
              First Name <span className="text-[#F2B705]">*</span>
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
              className="
                w-full
                px-4 py-3
                rounded-md
                bg-[#181E23]
                border border-[#353C42]
                text-[#E6E4DF]
                placeholder-gray-500
                outline-none
                focus:border-[#F2B705]
                transition
              "
            />

          </div>


          {/* ================= LAST NAME ================= */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="lastName"
              className="text-sm font-medium"
            >
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="
                w-full
                px-4 py-3
                rounded-md
                bg-[#181E23]
                border border-[#353C42]
                text-[#E6E4DF]
                placeholder-gray-500
                outline-none
                focus:border-[#F2B705]
                transition
              "
            />

          </div>


          {/* ================= PHONE NUMBER ================= */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="phone"
              className="text-sm font-medium"
            >
              Phone Number <span className="text-[#F2B705]">*</span>
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="
                w-full
                px-4 py-3
                rounded-md
                bg-[#181E23]
                border border-[#353C42]
                text-[#E6E4DF]
                placeholder-gray-500
                outline-none
                focus:border-[#F2B705]
                transition
              "
            />

          </div>


          {/* ================= EMAIL ================= */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="
                w-full
                px-4 py-3
                rounded-md
                bg-[#181E23]
                border border-[#353C42]
                text-[#E6E4DF]
                placeholder-gray-500
                outline-none
                focus:border-[#F2B705]
                transition
              "
            />

          </div>


          {/* ================= ADDRESS ================= */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="address"
              className="text-sm font-medium"
            >
              Address
            </label>

            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="4"
              className="
                w-full
                px-4 py-3
                rounded-md
                bg-[#181E23]
                border border-[#353C42]
                text-[#E6E4DF]
                placeholder-gray-500
                outline-none
                resize-none
                focus:border-[#F2B705]
                transition
              "
            />

          </div>


          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            className="
              w-full
              mt-2
              py-3
              rounded-md
              bg-[#F2B705]
              text-[#0F1418]
              font-semibold
              cursor-pointer
              hover:bg-[#dca500]
              transition
            "
          >
            Submit
          </button>

        </form>
      </div>


      {/* ================= WHATSAPP ================= */}
      <div className="max-w-3xl mx-auto mt-16">

        <h3 className="text-2xl font-semibold mb-5">
          Connect With Us
        </h3>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 group"
        >

          {/* WhatsApp Icon */}
          <div
            className="
              w-14 h-14
              rounded-full
              bg-[#25D366]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              group-hover:scale-105
              transition
            "
          >
            ☘
          </div>

          {/* WhatsApp Details */}
          <div>
            <p className="text-lg font-semibold">
              WhatsApp
            </p>

            <p className="text-gray-400 text-sm mt-1">
              +91 98765 43210
            </p>
          </div>

        </a>

      </div>


      {/* ================= DIVIDER ================= */}
      <hr className="max-w-6xl mx-auto border-[#353C42] my-12" />


      {/* ================= FOOTER ================= */}
      <footer className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Company */}
          <div>

            <h3 className="text-xl font-semibold mb-3">
              3S Constructions
            </h3>

            <p className="text-gray-400 max-w-md leading-relaxed">
              Building strong foundations and creating quality
              spaces with commitment, precision and excellence.
            </p>

          </div>


          {/* Company Contact */}
          <div className="md:text-right">

            <p className="text-gray-400 mb-3">
              <span className="text-[#E6E4DF] font-medium">
                Email:
              </span>{" "}

              <a
                href="mailto:info@3sconstructions.com"
                className="text-[#F2B705] hover:underline"
              >
                info@3sconstructions.com
              </a>
            </p>


            <p className="text-gray-400">

              <span className="text-[#E6E4DF] font-medium">
                LinkedIn:
              </span>{" "}

              <a
                href="https://www.linkedin.com/company/3s-constructions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2B705] hover:underline"
              >
                LinkedIn
              </a>

            </p>

          </div>

        </div>


        {/* Copyright */}
        <div
          className="
            border-t
            border-[#292F34]
            mt-8
            pt-5
            text-center
            text-gray-500
            text-sm
          "
        >
          <p>
            © 2026 3S Constructions. All Rights Reserved.
          </p>
        </div>

      </footer>

    </section>
  );
};

export default Contact;
