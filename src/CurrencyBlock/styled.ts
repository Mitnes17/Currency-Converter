import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 3em;
  font-weight: bold;
  padding: 20px 20px;
  letter-spacing: 1.3px;
  outline: none;
  margin-top: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
`;

export const Currency = styled.li`
  display: inline-flex;
  padding: 10px 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  justify-content: center;
  flex: 1;
  font-weight: 500;

  &.isActive {
    background-color: teal;
  }
`;

export const Arrow = styled.li`
  flex: 2;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  svg {
    width: 15px;
    height: 15px;
  }
`;
