import styled from 'styled-components';
import color from '../../config/colors';

export const Map = styled.svg`
  
`;

export const ProvinceMapElement = styled.path<{ provinceColor?: boolean }>`
  fill: ${props => (props.provinceColor ? `${color.lightGreen}` : "#eeeeee")};
  stroke: #ffffff;
  stroke-width: 1px;
`;