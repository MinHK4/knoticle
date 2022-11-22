import { FlexColumnCenter } from '@styles/layout';
import styled from 'styled-components';

export const SignInModalWrapper = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
`;

export const SignInModalSignUpContainer = styled(FlexColumnCenter)`
  padding: 20px;
  gap: 10px;

  border-top: 1px solid var(--title-active-color);

  font-size: 14px;
  color: var(--grey-01-color);
`;

export const SignUpButton = styled.button`
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 700;
`;
