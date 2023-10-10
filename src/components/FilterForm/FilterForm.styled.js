import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 8px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: ManropeThin;
  padding-left: 5px;
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;

  font-family: ManropeMedium;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;

  font-family: ManropeMedium;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const UnitLeft = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 10px;
  z-index: 9;
  font-family: ManropeMedium;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const UnitRight = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 10px;
  z-index: 9;
  font-family: ManropeMedium;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: rgba(52, 112, 255, 1);
  border-radius: 12px;
  padding: 14px 44px;
  color: white;
  margin-top: 20px;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
