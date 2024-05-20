import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Services from './Services';
import heroImage from '../assets/images/hero-image.jpg'; 


const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 408px;
  margin-left: 6px;
  padding: 0;
  margin-top: 40px;
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 560px;
  height: 408px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5); 
`;

const SmallTextContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 0; 
  background: rgba(235, 233, 255, 0.62); 
  width: 459px;
  height: 118px;
  border-radius: 0px 30px 30px 0px;
  
`;

const HeroTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 0px;
  margin-left: 20px;
  color: rgba(41, 35, 85, 1);
`;

const HeroSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 44px;
  font-weight: 700;
  // line-height: 53px;
  color: rgba(100, 100, 100, 1);
  margin-top: 0px;
  margin-left: 20px;
`;

const AdditionalText = styled.p`
  position: absolute;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const OnTimeDeliveryText = styled(AdditionalText)`
  top: 30%;
  left: 10px;
  color: rgba(41, 35, 85, 1);
  font-family: "Inter", sans-serif;
  font-size: 43.63px;
  font-weight: 900;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`;

const EconomicalPriceText = styled(AdditionalText)`
  top: 45%;
  left: 10px;
  color: rgba(41, 35, 85, 1);
  font-family: "Inter", sans-serif;
  font-size: 43.63px;
  font-weight: 700;
`;

const ZeroDamagePolicyText = styled(AdditionalText)`
  top: 60%;
  left: 10px;
  color: rgba(41, 35, 85, 1);
  font-family: "Inter", sans-serif;
  font-size: 43.63px;
  font-weight: 700;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 122%;
  right: 0px; 
  transform: translateY(-50%);
`;

const ServicesWrapper = styled.div`
  position: absolute;
  top: 100%; 
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImageContainer>
        <HeroImage src={heroImage} alt="fine art service" />
        <HeroOverlay />
        <SmallTextContainer>
          <HeroTitle>BOOK YOUR SERVICE NOW</HeroTitle>
          <HeroSubtitle>Fine art service</HeroSubtitle>
        </SmallTextContainer>
        <OnTimeDeliveryText>ON TIME DELIVERY</OnTimeDeliveryText>
        <EconomicalPriceText>ECONOMICAL PRICE</EconomicalPriceText>
        <ZeroDamagePolicyText>ZERO DAMAGE POLICY</ZeroDamagePolicyText>
      </HeroImageContainer>
      <FormWrapper>
        <Form />
      </FormWrapper>
      <ServicesWrapper>
        <Services />
      </ServicesWrapper>
    </HeroWrapper>
  );
};

export default Hero;
