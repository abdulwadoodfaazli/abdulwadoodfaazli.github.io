import React from "react";
import NavBar from "../components/navbar";
import Header from "../components/header";
import Image from "next/image";
import innoshow from "/public/innoshow.jpg";
import { SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <SimpleGrid className="intro" columns={2} spacing={10}>
        <div className="profile-pic">
          <Image width="500vh" height="700vh" src={innoshow} alt="picture" />
        </div>
        <div className="bio">
          <p>
            I am currently a 3rd Year Computer Engineering student at the University of Hong Kong. I actually joined HKU as a Biomedical Engineering major but shifted to Computer Engineering after my first year because of the keen interest in programming that I had developed.</p> 
            <p> I am mainly interested in AI and mathematics. To be more specific, I&apos;m inclined towards the financial applications of these domains, and very often find myself watching relevant documentaries, movies, or YouTube videos on channels like
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/c/numberphile"
              target="_blank"
            >
              {" "}
              Numberphile
            </a>{" "}
            and
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/user/Computerphile"
              target="_blank"
            >
              {" "}
              Computerphile
            </a>
            . I also spend a lot of my time learning finance, economics, and investing. Nowadays, I&apos;m reading{" "}
            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/The_Intelligent_Investor"
              target="_blank"
            >
              The Intelligent Investor
            </a>{" "}
            , which is widely regarded as the best ever book on investing. Next up on my list of books is <a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Man-Who-Solved-Market-Revolution/dp/073521798X">The Man Who Solved the Market</a>, which is an account on Jim Simmons, the man who revolutionized Wall Street.
          </p>
          <p>
            I am experienced in AI and web development. I particularly enjoy finding patterns in the weirdest datasets and then making something on top of them. Currently, I&apos;m exploring Natural Language Processing and look forward to building something impactful using it. I also enjoy participating in hackathons and brainstorming new ideas. This is evident from the fact that I have managed to bag the top spot in the IEEE Blockchain Hackathon 2022 and 3rd spot in CodeIT Suisse 2022, the annual Credit Suisse Programming Challenge.
          </p>
          <p>
            Apart from this, my hobbies include playing basketball, squash,
            solitaire, and running. I&apos;m a huge Lakers fan and no, Michael
            Jordan is not the GOAT in my opinion, it&apos;s Lebron. Feel free to
            reach out to me through any of the provided channels if you ever
            want to work together, play together, or even debate about MJ vs. Kobe
            vs. Lebron.
          </p>
        </div>
      </SimpleGrid>
    </>
  );
}
