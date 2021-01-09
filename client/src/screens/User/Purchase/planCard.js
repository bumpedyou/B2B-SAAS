import React from 'react';
import { colors } from '../../../styles/theme';
import styled from 'styled-components';
import PlanItem from './planItem';

const PurchaseHeader = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.coolGray500};
  text-align: center;
`;

const PurchaseText = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: ${colors.coolGray500};
  text-align: center;
  padding-bottom: 1rem;
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${colors.white};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
`;

const PlanCard = ({ setBasic, setPremium, isBasicActive }) => {
  const premium_price = process.env.GATSBY_STRIPE_PREMIUM_PLAN_PRICE;
  const basic_price = process.env.GATSBY_STRIPE_BASIC_PLAN_PRICE;
  const basic_plan_type = 'Basic';
  const premium_plan_type = 'Premium';

  return (
    <PlanWrapper>
      <PurchaseHeader>Buy SAAS Pro Now</PurchaseHeader>
      <PurchaseText>Main Benefit of product</PurchaseText>
      <PlanItem
        isActive={isBasicActive ? true : false}
        planHandler={setBasic}
        planType={basic_plan_type}
        planPrice={basic_price}
      />
      <PlanItem
        isActive={isBasicActive ? false : true}
        planHandler={setPremium}
        planType={premium_plan_type}
        planPrice={premium_price}
      />
    </PlanWrapper>
  );
};

export default PlanCard;