import styled from '@emotion/styled';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 335px;

  min-height: 225px;
  max-height: 80%;

  padding: 40px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #3e85f3;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    height: 112px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
  }

  @media screen and (min-width: 768px) {
    max-width: 541px;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
  background-color: white;
  color: rgba(18, 20, 23, 1);
  width: 24px;
  height: 24px;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
