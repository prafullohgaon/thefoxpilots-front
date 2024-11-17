import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import {mens_kurta} from '../../../Data/mens_kurt'
import styled from "styled-components";
import HeaderImage from "../../components/utils/Images/Header.png";
// import videoFile from "./video.mp4";
import img1 from "./homeimages/1.jpg"
import img2 from "./homeimages/2.jpg"
import img3 from "./homeimages/3.jpg"
import img4 from "./homeimages/4.jpg"
import img5 from "./homeimages/5.jpg"
const Container = styled.div`
  padding: 20px 30px;

  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  max-width: 100%;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Img = styled.img`
  width: 90%;
  height: 700px;
  object-fit: cover;
  max-width: 1200px;
`;


const HomePage = () => {
  return (
    <div>
      <MainCarosel />

      <Container>
        
      <Section
          style={{
            alignItems: "center",
          }}
        >
          <Img src={HeaderImage} />
        </Section>

      </Container>
        <Section>
          <img src={img1} alt="" />
        </Section>
        <Section>
          <img src={img2} alt="" />
        </Section>
        <Section>
          <img src={img3} alt="" />
        </Section>
        <Section>
          <img src={img4} alt="" />
        </Section>


{/*       <div key="video" className="video-item">
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", border: "none", outline: "none" }}
        src={videoFile}
      >
        Your browser does not support the video tag.
      </video>
    </div> */}
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        {/* <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/> */}
        <HomeSectionCarosel data={mens_kurta} sectionName={"Womens's Dress"}/>
      </div>

    </div>
  );
};

export default HomePage;
