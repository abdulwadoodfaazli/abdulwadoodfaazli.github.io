import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import EduCard from "../components/edu_card";

export default function Education() {
  var hku_acc = [
    "Rosita King Ho Scholar (Full Tuition for 4 years)",
    "EEE Entrance Scholar",
    "Engineering Faculty Student Adviser",
    "Lee Shau Kee Hall Basketball Team Member",
    "Assistant Editor-in-Chief, Rotor Editorial Board",
  ];

  var cch_acc = [
    "Wing Commander of my resident wing (hostel)",
    "Gold Medal for outstanding academics",
    "Jinnah Scholar (Full scholarship, including boarding and utilities, for one academic year)",
    "Duke of Edinburgh International Silver Award",
    "Vice Captain, College Basketball Team",
    "Best Extempore Speaker",
  ];

  return (
    <div className="all-edu">
      <SimpleGrid columns={2} spacing={10}>
        <EduCard
          school="The University of Hong Kong"
          degree="Bachelor of Engineering in Computer Engineering"
          link="https://www.eee.hku.hk/study/undergraduate/computer-engineering/"
          logo="/edu/hku.png"
          dates="Sep 2020 - June 2024"
          accomplishments={hku_acc}
        />

        <EduCard
          school="Cadet College Hasanabdal"
          degree="GCE O and A Levels"
          link="https://cch.edu.pk/"
          logo="/edu/cch.png"
          dates="April 2015 - June 2020"
          accomplishments={cch_acc}
        />
      </SimpleGrid>

      <div className="certifications">
        <h1>Certifications:</h1>
        <ul>
          <li>
            <b>
              Software Engineering Virtual Internship Program – JP Morgan Chase
              & Co.
            </b>
          </li>
          <p>
            <i>
              Worked on a web application that allows traders to monitor the
              prices of two historically correlated stocks and identify trading
              opportunities when the correlation weakens
            </i>
          </p>
          <li>
            <b>Neural Networks and Deep Learning – DeepLearning.AI</b>
          </li>
          <p>
            <i>
              Learned about the mathematics and intuition behind Logistic
              Regression and built a 4-Layer neural network for binary
              classification from scratch
            </i>
          </p>
          <li>
            <b>Fundamentals of Deep Learning – NVIDIA</b>
          </li>
          <p>
            <i>
              Used Tensorflow to implement different neural networks such as
              CNNs and LSTMs for multiple purposes such as predicting the price
              of a Tencent stock or recognizing sign-language gestures
            </i>
          </p>
          <li>
            <b>
              Introduction to Trading, Machine Learning, & GCP – New York
              Institute of Finance and Google Cloud Platform
            </b>
          </li>
          <p>
            <i>Learn about different financial terms such as arbitrage and back-testing, and use the Google Cloud Platform and BigQuery ML to forecast AAPL stock price using ARIMA (AutoRegressive Integrated Moving Average) modelling.</i>
          </p>
          <li>
            <b>
              Python and Statistics for Financial Analysis – Hong Kong
              University of Science and Technology
            </b>
          </li>
          <p>
            <i>Used Python Numpy, SciPy, Pandas, matplotlib, and statsmodels to implement a multiple linear regression algorithm to predict the price of an ETF of S&P500.</i>
          </p>
          <li>
            <b>Using Databases with Python – University of Michigan</b>
          </li>
          <p>
            <i>Learned about SQLite 3 and built an application that uses Google GeoCoding and Maps APIs to visualize any inputted location</i>
          </p>
        </ul>
      </div>
    </div>
  );
}
