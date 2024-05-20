import React from 'react';
import styled from 'styled-components';



const ServicesWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 700px; 
  font-family: "Inter", sans-serif;
`;

const ServiceCard = styled.div`
  background-color: rgba(217, 217, 217, 0.37);
  border-radius: 5px;
  width: 350px;
  margin-right: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #292355;
  margin-bottom: 10px;
  text-align: center;
`;

const ServiceList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
  font-size: 16px;
  color:  #292355;
  font-weight: 400;
`;


const Services = () => {
  return (
    <ServicesWrapper>
      <ServiceCard>
        <ServiceTitle>Transportation</ServiceTitle>
        <ServiceList>
          <li>Transportation by road should be in fully closed hard walled secured trucks, equipped with a mobile phone and an internal strapping system.  A supply of clean PU Foam, bubble wrap and acid free tissue should be carried.</li>
          <li>The cargo area of the truck should be clean and free of any loose objects/particles.</li>
          <li>Works should be crated for transportation, as per Museum specifications.</li>
          <li>Crates should be strapped or wedged so that they cannot move about when in transit.</li>
          <li>There should be a minimum of two UAPL staff  with the works in transit, at all times, other than when the shipments are on board vessel or on the aircraft or accompanied by a courier designated by the lender/Museum/Art Gallery/Organiser.</li>
          <li>Loading/Unloading of works into the trucks in strong wind or rain is to be avoided, unless required in an emergency..</li>
        </ServiceList>
      </ServiceCard>
      <ServiceCard>
        <ServiceTitle>Airport Supervision</ServiceTitle>
        <ServiceList>
          <li>To handle successful fine art consignment is to have maximum control on the consignment starting from packing, handling, transportation and handover to airlines.</li>
          <li>The key is to go one step more and oversee the handling at airport, witnessing the palletizing / de-palletizing of the consignment.</li>
          <li>Permissions for overseeing the handling at airport can be obtained at the time of filing the documents at Customs (depending on the security situation at each city).</li>
          <li>Professional Art handlers for examination & x-ray handling of crates..</li>
        </ServiceList>
      </ServiceCard>
    </ServicesWrapper>
  );
};

export default Services;
