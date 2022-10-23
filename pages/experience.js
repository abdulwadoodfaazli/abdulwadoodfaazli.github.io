import React from "react";
import ExpCard from "../components/exp_card";

export default function Experience() {
  var fqc = '"We focus on digital investment technology and media. We provide stock analysis systems to various investment education partners. We also work with multiple business partners to provide services including investment strategy apps and investment education."';
  var fqc_desc = [
    "Built and deployed a full-stack web application that allows users to personalize, visualize, and optimize their MPF portfolio in real-time from close to 500 funds (Next.js, Node.js, ReactJS, MongoDB, ChakraUI, MaterialUI)",
    "Automated the calculation of client portfolio metrics from selected funds and stored the results in a database for fast retrieval, all in real time, saving ≈ 2 hours of manual labor.",
    "Learned and implemented mathematical algorithms such as Dynamic Time Warping to automate trading strategies using pattern recognition.",
  ];

  var sra = '"The HKU Department of Ophthalmology brings together renowned researchers and doctors from all across the globe to develop novel solutions to some of the most challenging problems in the field of eyecare."';
  var sra_desc = ["Worked under Dr. Vincent Tam and Dr. Allie Lee to better understand the anatomy of the human eye and build advanced AI algorithms to improve the digital detection and diagnosis of eye diseases", "Refactored and optimized an Android application for self-monitoring of various eye conditions (telemedicine)"];

  var weava =
    '"Weava is an online academic research tool that allows students, professors, and researchers to do their research more efficiently and collaboratively."';
  var weava_desc = [
    "Researched measures to mitigate traffic abuse on a Node.js system in an AWS Elastic Beanstalk instance. Learned about different cybersecurity measures such as API rate limiting, Elastic Load Balancing, bot management, and the Global Edge Network on AWS.",
    "Led interns to develop and optimize a CI/CD pipeline for the entire Weava web application, reducing build time from approx. 200s to around 60s (Angular, ExpressJS, YAML)",
  ];

  var preface = '"The world has evolved at a speed that traditional teaching methods have failed to match. We believe there is a better way to education. Preface uses AI and Machine Learning to match learners with instructors and personalized course materials. Our educators and support team would then use the data insights to inspire and engage students in their most personally relevant way. Learning code should be a series of self-discoveries and aha-moments, and Preface is here to make this work for everyone with technology."';
  var preface_desc = [
    "Collaborated with the Training and Curriculum Development Team to devise and debug innovative projects on frontend development and data science for students.",
    "Led students of ages 9-16 in 5-day intensive programming boot camps to teach Python, frontend developmen and MIT App Inventor, ensuring a 100% passing rate.",
  ];

  var google = '"Crowdsource is a fun, easy way for you to use your own abilities to contribute to the building blocks of Artificial Intelligence (AI). This helps us make the Google products that you love even better for your language, region and culture. Answers from you and millions of others around the world are used in Machine Learning based products, making them work well for the diversity of global population."';
  var google_desc = [ "Help improve Google AI Algorithms by providing data and then helping the algorithms classify that data accurately, making online Google services like Translate or Lens more helpful and relatable for people from underrepresented regions of the world", 
  "Attend frequent meetings and conferences with like-minded individuals to learn about what others are doing and and address global challenges together."];

  var bhku = '"Blockchain at HKU is the first university blockchain club in Hong Kong. We specialize in educating the community by researching different use cases of blockchain technology, facilitating innovative projects and discussions, providing industry experience to members, building out prototypes, and integrating solutions regarding the use of blockchain."';
  var bhku_desc = ["Research on the feasibility of developing NFTs on different blockchains.", "Attend bi-weekly meetings to discuss latest trends and their future implications in the blockchain world"];

  var breed = '"BREED is an organization committed to developing and promoting bio-inspired technology. Initially starting as an off-shoot of a robotic fish project by students from the University of Hong Kong, we are now expanding into education and research."';
  var breed_desc = ["Worked on improving the mechanics and waterproofing of the world's fastest robotic fish", "Used SOLIDWORKS to design an ergonomic remote controller for the fish. Later fabricated it using 3D Printers"];

  return (
    <div className="exp-cards">
      <ExpCard
        company="FQC Investment Systems Limited"
        link="https://www.fqcis.com/aboutus"
        role="Product Development Intern"
        dates="June 2022 - Aug 2022"
        logo="/exp/fqc.jpg"
        description={fqc}
        work={fqc_desc}
      />

      <ExpCard
        company="The University of Hong Kong, Department of Ophthalmology"
        link="https://www.ophthalmology.hku.hk/"
        role="Student Research Assistant"
        dates="June 2022 - Sep 2022"
        logo="/edu/hku.png"
        description={sra}
        work={sra_desc}
      />

      <ExpCard
        company="Weava"
        link="https://www.weavatools.com/"
        role="Software Development Intern"
        dates="Jan 2022 - May 2022"
        logo="/exp/weava.png"
        description={weava}
        work={weava_desc}
      />

      <ExpCard
        company="Preface Coding"
        link="https://www.preface.ai/"
        role="Coding Intern"
        dates="June 2021 - May 2022"
        logo="/exp/preface.jpg"
        description={preface}
        work={preface_desc}
      />

      <ExpCard
        company="Google Crowdsoruce"
        link="https://crowdsource.google.com/about/"
        role="Influencer"
        dates="Dec 2020 - Present"
        logo="/exp/google.png"
        description={google}
        work={google_desc}
      />

      <ExpCard
        company="Blockchain @ HKU"
        link="https://www.linkedin.com/company/hku-blockchainclub/"
        role="Technical Team Member"
        dates="Aug 2021 - May 2022"
        logo="/exp/bhku.jpg"
        description={bhku}
        work={bhku_desc}
      />

      <ExpCard
        company="BREED Robotics"
        link="https://www.breedinnovations.com/"
        role="Mechanical Team Member"
        dates="Feb 2021 - Jan 2022"
        logo="/exp/breed.jpg"
        description={breed}
        work={breed_desc}
      />
    </div>
  );
}
