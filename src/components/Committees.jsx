import React from "react";
import Blob from "../assets/images/blob.svg";
import UNCSW from "../assets/images/uncsw.png";
import UNSC from "../assets/images/unsc.png";
import CommitteeImageCard from "./CommitteeImageCard";

export const Committees = () => {
  return (
    <div className="p-12 relative w-screen h-screen flex flex-col justify-start items-center bg-gradient-to-r from-primary to-primary-dark ">
      <div className="absolute blur-3xl top-0 -right-64 z-10">
        <img
          src={Blob}
          alt="Blob SVG"
          style={{ width: "43rem", height: "43rem" }}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-montserrat text-6xl text-white font-bold uppercase tracking-widest">
          Committees
        </h1>
        <div className="flex flex-row justify-center items-center mt-16">
          <div className="flex place-items-center grid grid-cols-2 gap-y-14 w-2/5 px-14">
            <CommitteeImageCard
              image={UNCSW}
              title="UNCSW"
              top="-2rem"
              left="1rem"
              width="6rem"
              height="5.5rem"
            ></CommitteeImageCard>
            <CommitteeImageCard
              image={UNSC}
              title="UNSC"
              top="-2rem"
              left="1rem"
              width="6rem"
              height="5.5rem"
            ></CommitteeImageCard>
            <CommitteeImageCard
              image={UNSC}
              title="UNSC"
              top="-2rem"
              left="1rem"
              width="6rem"
              height="5.5rem"
            ></CommitteeImageCard>
            <CommitteeImageCard
              image={UNSC}
              title="UNSC"
              top="-2rem"
              left="1rem"
              width="6rem"
              height="5.5rem"
            ></CommitteeImageCard>
            <CommitteeImageCard
              image={UNSC}
              title="UNSC"
              top="-2rem"
              left="1rem"
              width="6rem"
              height="5.5rem"
            ></CommitteeImageCard>
            <CommitteeImageCard
              image={UNSC}
              title="UNSC"
              top="-2rem"
              left="1rem"
              width="6rem"
              height="5.5rem"
            ></CommitteeImageCard>
          </div>
          <div className="flex flex-col justify-center items-start w-2/5 z-40">
            <p className="text-xs text-primary-lighter font-montserrat font-semibold">
              Get Ready
            </p>
            <h1 className="mt-4 text-2xl text-white font-montserrat font-bold">
              Committees
            </h1>
            <div className="mt-3">
              <p className="my-4 text-sm text-white font-montserrat font-normal">
                UNCSW: It is an honor to welcome you to the United Nations
                Commission on the Status of Women (UNCSW), a dynamic forum
                dedicated to advancing the rights and empowerment of women
                globally.
              </p>
              <p className="my-4 text-sm text-white font-montserrat font-normal">
                UNSC: Welcome to the apex of international diplomacy—the United
                Nations Security Council (UNSC). The UNSC stands as the foremost
                body entrusted with the monumental responsibility of maintaining
                international peace and security.
              </p>
              <p className="my-4 text-sm text-white font-montserrat font-normal">
                Ad-Hoc: Welcome to the thrilling world of the Ad-Hoc Committee,
                where the unexpected is the only constant, and crisis management
                takes center stage.
              </p>
              <p className="my-4 text-sm text-white font-montserrat font-normal">
                PNA: The National Assembly of Pakistan, seated at the heart of
                our democratic system, represents the aspirations, hopes, and
                dreams of the Pakistani people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
