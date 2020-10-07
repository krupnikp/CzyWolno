import styled from 'styled-components';
import color from '../config/colors';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 11px 25px;
  border-radius: 50px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.3s;
  background: ${color.lightGreen};
  color: ${color.white};
  border: 1px solid ${color.lightGreen};
  width: 80%;
  margin: 0 auto;
  letter-spacing: 1px;

  &:hover {
    background: none;
    color: ${color.lightGreen}
  }
`;

export default Button;