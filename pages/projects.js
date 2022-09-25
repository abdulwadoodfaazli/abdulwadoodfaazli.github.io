import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjCard from "../components/proj_card";

export default function Projects() {
  var rob =
    "A remote-controlled robot specialized in playing soccer. Used SOLIDWORKS for implementing an ingenious design that would allow for safe maneuverability without losing the ball. Manufacturing was done by 3D printed and laser cut materials. Used mBlock to coherently build the control mechanism of the robot. Won the soccer competition and presented the project at the HKU InnoShow 2021 amongst the most innovative student-led projects at HKU.";

  var sec =
    "The first ever GUI-based wallet for the quantum-resistant Abelian blockchain within 16 hours. Created two separate wallet modes to suit the capabilities of both beginner and experienced Web3.0 users. Declared as Champions of the IEEE Blockchain Hackathon 2022.";

  var mill =
    "Implemented the popular 'Who Wants to Be a Millionaire' game using C++ and the Linux OS. Added interesting features like lifelines (50-50, Phone a Friend, Ask the Audience, Second Chance). Randomized some processes to make the game more interesting. Used dynamic memory management to keep track of all players who have already played the game in order to simulate the reality that no person can participate in the game more than once.";

  var quant =
    "A trading bot that outputs the 50 best stocks to buy in the S&P500 index to build an equal-weighted weighted portfolio of them based on momentum.";

  var val =
    "A trading bot that outputs the 50 best stocks to buy in the S&P500 index to build an equal-weighted weighted portfolio of them based on value.";

  var geo =
    "Location visualizer using Google GeoCoding APIs, Google Maps APIs, Python, and SQLite3";

  var nn =
    "A 2-Layer and a 4-Layer neural network for binary classification of cat images built by myself from using no deep learning libraries and only numpy";

  var ten =
    "Predicting the Adjusted Close Price of a Tencent stock using a Recurrent Neural Network (Long Short Term Memory)";

  var jaffe =
    "Classifying facial expressions in the Japanese Female Facial Expression Dataset (JAFFE) using a Convolutional Neural Network";

  var news =
    "A full-stack web application where users can post latest news articles, read them, and also share their thoughts on them via comments in real-time";

  return (
    <div className="all-projects">
      <SimpleGrid columns={2} spacing={10}>

        <ProjCard
          title="Securian"
          desc={sec}
          vid="https://youtube.com/shorts/VQ8UG9OVy3w"
          link="https://github.com/socathie/securian"
          img="/proj/sec.jpg"
        />

        <ProjCard
          title="Neural Network from Scratch"
          desc={nn}
          link="https://github.com/abdulwadoodfaazli/Neural-Network-From-Scratch"
          vid=""
          img="/proj/nn.png"
        />

        <ProjCard
          title="Facial Expression Classifier"
          desc={jaffe}
          link="https://github.com/abdulwadoodfaazli/CNN-JAFFE"
          vid=""
          img="/proj/jaffe.jpg"
        />

        <ProjCard
          title="Momentum Investing Bot"
          desc={quant}
          link="https://github.com/abdulwadoodfaazli/Quantitative-Momentum-SP500"
          vid=""
          img="/proj/quant.jpg"
        />

        <ProjCard
          title="Who Wants to be a Millionaire?"
          desc={mill}
          link="https://github.com/abdulwadoodfaazli/WhoWantsToBeAMillionaire"
          vid="https://drive.google.com/file/d/1_oRFYypK90xzImxykZo20k_LpcsTD_RA/view?usp=sharing"
          img="/proj/mill.jpg"
        />

        <ProjCard
          title="Predicting Tencent Stock Price"
          desc={ten}
          link="https://github.com/abdulwadoodfaazli/DeepLearning-Tencent"
          vid=""
          img="/proj/ten.jpg"
        />

        <ProjCard
          title="Newsfeed"
          desc={news}
          link="https://github.com/abdulwadoodfaazli/NewsFeed"
          vid=""
          img="/proj/news.jpg"
        />

        <ProjCard
          title="GeoCoding"
          desc={geo}
          link="https://github.com/abdulwadoodfaazli/GeoCoding"
          vid=""
          img="/proj/geo.jpg"
        />

        <ProjCard
          title="Value Investing Bot"
          desc={val}
          link="https://github.com/abdulwadoodfaazli/ValueInvesting-SP500"
          vid=""
          img="/proj/val.jpg"
        />

        <ProjCard
          title="Smart Soccer Robot"
          desc={rob}
          link="https://innoacademy.engg.hku.hk/soccer-robot2021i/"
          vid="https://www.youtube.com/watch?v=HlhNbRQQ_bg"
          img="/proj/rob.jpg"
        />
      </SimpleGrid>

      <h1>More on the way...</h1>
    </div>
  );
}
