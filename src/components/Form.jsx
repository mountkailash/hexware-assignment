import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import calendarIconImage from '../assets/images/calender.png';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const LocationText = styled.span`
  color: #292355;
  margin-right: 8px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

const DropdownIcon = styled(FaChevronDown)`
  width: 12px;
  height: 8px;
  color: #292355;
`;

//
const OptionColumn = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-bottom: 40px;
`;

const OptionContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: center; 
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 20px;
  padding: 4px 10px;
  background-color: ${props => props.selected ? '#A6A3B6' : '#ECECEC'};
  cursor: pointer;

`;

const OptionText = styled.span`
  font-size: 12px;
  color: #FFFFFF;
  font-weight: 700;
  
`;

const OptionText2 = styled.span`
  font-size: 12px;
  color: #808080;
  font-weight: 700;
  
`;


//

const FormWrapper = styled.form`
  background-color: rgba(242, 242, 242, 0.62);
  padding: 20px;
  border-radius: 30px 0px 30px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  width: 487px;
  height: 934px;
  margin-left: auto;
  position: relative;
  font-family: "Inter", sans-serif;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  position: relative; 
  
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: rgba(68, 68, 68, 1);
  font-size: 13px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgba(218, 218, 218, 1);
  border-radius: 9px;
  
`;

const FullWidthInput = styled(Input)`
  width: 95%;
`;

const FixedWidthInput = styled(Input)`
  width: 180px;
`;

const CalendarIcon = styled.img`
  position: absolute;
  top: 70%;
  margin-left: 20px;
  // right: 10px;
  transform: translateY(-50%);
  width: 26px; 
  height: 26px; 
  cursor: pointer;
`;

const Button = styled.button`
background-color: #004019;
color: #fff;
padding: 10px;
border: none;
border-radius: 8px;
cursor: pointer;
width: 180px;
position: absolute;
margin-top: 40px;
right: 20px; 
font-family: "Inter", sans-serif;
font-weight: 700;
font-size: 13px;
`;

const StepText = styled.span`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  color: #444444;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

const Form = () => {
  


  return (
    <ContainerWrapper>
      <LocationWrapper>
        <LocationText>Delhi</LocationText>
        <DropdownIcon />
      </LocationWrapper>
      <FormWrapper>
      <OptionColumn>
            <OptionContainer selected>
              <OptionText selected>Domestic</OptionText>
            </OptionContainer>
            <OptionContainer>
              <OptionText2>International</OptionText2>
            </OptionContainer>
          </OptionColumn>
        <FormField>
          <Label>Pick up location</Label>
          <FullWidthInput type="text" name="pickup" />
        </FormField>
        <FormField>
          <Label>Drop up location</Label>
          <FullWidthInput type="text" name="drop" />
        </FormField>
        <FormField>
          <Label>Contact</Label>
          <FixedWidthInput type="text" name="contact" />
        </FormField>
        <FormField>
          <Label>Shipping Date</Label>
          <FixedWidthInput type="text" name="shipping_date" />
          <CalendarIcon src={calendarIconImage} />
        </FormField>
        <Button type="submit">Get estimate</Button>
        <StepText>Step 1/4</StepText>
      </FormWrapper>
    </ContainerWrapper>
  );
};

export default Form;
