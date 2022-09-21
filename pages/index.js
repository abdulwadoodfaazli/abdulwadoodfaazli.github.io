import React from "react";
import NavBar from "../components/navbar";
import Image from "next/image";
import innoshow from "/public/innoshow.jpg"
import { SimpleGrid } from '@chakra-ui/react'

export default function Home() {
  return (
    <SimpleGrid className="intro" columns={2} spacing={10}>
      <div className="profile-pic">
        <Image width="500vh" height="700vh" src={innoshow} alt="picture" />
      </div>
      <div className="bio">
        <p>
          Hi! I&apos;m Abdul – a 3rd Year Computer Engineering student at the
          University of Hong Kong. Welcome to my webpage, and thanks for taking
          out time to visit it.
        </p>
        <p>
          I am interested in AI and mathematics. To be more specific, I&apos;m
          particularly inclined towards the financial applications of these
          domains, and very often find myself watching documentaries, movies, or
          YouTube videos on channels like
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
          . However, having no background in finance whatsaoever, I sometimes
          find it difficult to grasp different concepts and I&apos;m therefore reading{" "}
          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/The_Intelligent_Investor"
            target="_blank"
          >
            The Intelligent Investor
          </a>{" "}
          nowadays which is widely considered as the Bible of investing.
        </p>
      </div>
    </SimpleGrid>
  );
}
