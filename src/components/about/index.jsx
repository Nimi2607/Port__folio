import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Beyond web development, I delve into the arcane realms of data analytics and machine learning, wielding tools like Python, Flask, SQL, Numpy, Pandas, Matplotlib, and Seaborn to uncover hidden patterns and insights. I also harness the power of visualization platforms like Power BI and Tableau, as well as the advanced capabilities of Excel, to communicate data stories effectively. From natural language processing (NLP) to predictive modeling, my machine learning expertise enables me to train intelligent systems that learn, innovate, and predict the future. Join me as I continue to explore new spells, technologies, and data-driven insights to shape the future of the web and beyond.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            KJ Somaiya College of Engineering<sub className="font-semibold text-base">2022-26</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Indian Institute of Technology, Ropar{" "}
            <sub className="font-semibold text-base">Minor in AI</sub>
          </p>
        </ItemLayout>

       

        

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=css,figma,firebase,git,github,html,js,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,react,replit,tailwind,threejs,vercel,vscode,anaconda,arduino,autocad,azure,c,cpp,discord,django,py `}
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
