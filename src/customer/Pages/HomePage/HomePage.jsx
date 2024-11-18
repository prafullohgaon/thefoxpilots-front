import React from "react";
import styled from "styled-components";
import videoFile from "./video.mp4";
import img1 from "./homeimages/1.jpg"
import img2 from "./homeimages/9.jpg"
import img3 from "./homeimages/10.jpg"
import img4 from "./homeimages/11.jpg"
import img5 from "./homeimages/12.jpg"
import img6 from "./homeimages/13.jpg"
import img7 from "./homeimages/14.jpg"
import img8 from "./homeimages/15.jpg"
import img9 from "./homeimages/16.jpg"
import img10 from "./homeimages/2.jpg"

// Styled Components
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Section = styled.div`
  max-width: 100%;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;

const HeroButton = styled.a`
  padding: 10px 20px;
  background-color: white;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
`;

const ExploreSection = styled.section`
  text-align: center;
  padding: 40px 20px;
  background-color: #f8f8f8;
`;

const ProductsSection = styled.section`
  padding: 40px 20px;
  background-color: #fff;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 15px 0 5px;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const ProductLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: #555;
  }
`;

const FullWidthImageSection = styled.section`
  width: 100%;
  text-align: center;
  margin: 20px 0;
`;

const FullWidthImage = styled.img`
  max-width: 100%;
  height: auto;
`;

// Main Component
const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <BackgroundVideo autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
        <HeroContent>
          <h1>Louis Vuitton Colourmania</h1>
          <HeroButton href="men/clothing/mens_kurta">Discover the Collection</HeroButton>
        </HeroContent>
      </HeroSection>

      <ExploreSection>
        <h1 style={{fontWeight:"bolder", fontSize:"30px"}}>Explore the Fashion</h1>
        <p>Discover the latest trends and exclusive collections.</p>
      </ExploreSection>
      <Section>
          <img src={img1} alt="" />
        </Section>
      <ProductsSection>
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight:"bold" }}>Our Products 2025 New</h2>
        <ProductsGrid>
          <ProductCard>
            <ProductImage
              src={img5}
              alt="Leather Bags"
            />
            <ProductTitle>Leather Bags</ProductTitle>
            <ProductDescription>Starting at $200</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src={img3}
              alt="Stylish Sunglasses"
            />
            <ProductTitle>Stylish Sunglasses</ProductTitle>
            <ProductDescription>Starting at $150</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src={img2}
              alt="Luxury Watches"
            />
            <ProductTitle>Luxury Watches</ProductTitle>
            <ProductDescription>Starting at $500</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src={img4}
              alt="Jewelry Collection"
            />
            <ProductTitle>Jewelry Collection</ProductTitle>
            <ProductDescription>Starting at $700</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
        </ProductsGrid>
      </ProductsSection>

      <Section>
          <img src={img10} alt="" />
        </Section>
     
      <ProductsSection>
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight:"bold" }}>Our Products 2025 New</h2>
        <ProductsGrid>
          <ProductCard>
            <ProductImage
              src={img6}
              alt="Leather Bags"
            />
            <ProductTitle>Leather Bags</ProductTitle>
            <ProductDescription>Starting at $200</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src={img7}
              alt="Stylish Sunglasses"
            />
            <ProductTitle>Stylish Sunglasses</ProductTitle>
            <ProductDescription>Starting at $150</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src={img8}
              alt="Luxury Watches"
            />
            <ProductTitle>Luxury Watches</ProductTitle>
            <ProductDescription>Starting at $500</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src={img9}
              alt="Jewelry Collection"
            />
            <ProductTitle>Jewelry Collection</ProductTitle>
            <ProductDescription>Starting at $700</ProductDescription>
            <ProductLink href="men/clothing/mens_kurta">View Details</ProductLink>
          </ProductCard>
        </ProductsGrid>
      </ProductsSection>

   
    </div>
  );
};

export default HomePage;
