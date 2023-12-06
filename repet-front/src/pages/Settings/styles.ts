import styled from 'styled-components';

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContainerSettingItem = styled.div`
  width: 100%;
  max-width: 1024px;
`;

export const SettingItem = styled.div`
  display: flex;
  align-items: center;
`;

export const SettingLabel = styled.label`
  margin-left: 12px;
`;

export const SettingSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;
