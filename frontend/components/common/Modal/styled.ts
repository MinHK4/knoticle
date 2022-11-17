import styled from 'styled-components';

export const Dimmed = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModalInner = styled.div`
  width: 486px;
  height: 500px;
  margin-top: 150px;
  padding: 32px;
  background: var(--white-color);
  border-radius: 30px;
  z-index: 1;
`;
