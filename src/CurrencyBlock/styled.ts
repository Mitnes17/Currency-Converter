import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 20px 20px;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
`;

export const Currency = styled.li`
  display: inline-flex;
  flex: 1;
  justify-content: center;
  padding: 10px 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  font-weight: 500;
  cursor: pointer;

  &.isActive {
    background-color: teal;
  }
`;

export const Arrow = styled.li`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex: 2;

  svg {
    width: 15px;
    height: 15px;
  }
`;
