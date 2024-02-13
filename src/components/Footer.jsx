import React from "react";
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-serif font-bold">
          Divine Enterprise
        </h1>
        <p className="py-4">
          We then generate text which is randomly produced but has the same
          distribution of letter groups as the input text. The result depends
          greatly on the source text
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li py-2 text-sm>
              Analytics
            </li>
            <li py-2 text-sm>
              Marketing
            </li>
            <li py-2 text-sm>
              Commerce
            </li>
            <li py-2 text-sm>
              Insides
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li py-2 text-sm>
              Pricing
            </li>
            <li py-2 text-sm>
              Documentation
            </li>
            <li py-2 text-sm>
              Guides
            </li>
            <li py-2 text-sm>
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li py-2 text-sm>
              About
            </li>
            <li py-2 text-sm>
              Blog
            </li>
            <li py-2 text-sm>
              Jobs
            </li>
            <li py-2 text-sm>
              Career
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
