import styled from '@emotion/styled'

export const Card = styled.div`
    position: relative;
  border: ${props =>`2px dashed ${props.theme.theme.colors.black}`};
  padding: ${props => props.theme.theme.spacing(2)};
  border-radius: 4px;
`
export const EventName = styled.h2`
    argin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
export const Info = styled.p`
    display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  svg {
    display: block;
  margin-right: 8px;
  color: ${props => props.theme.theme.colors.red};
  &:hover,
    &:focus {
     background-color: ${props => props.theme.theme.colors.blue};
  }
  };
  
`;

//Функция для передачи цвета//


export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;

  color: ${props => props.theme.theme.colors.white};

  background-color: ${({eventType,theme}) => {
    console.log(theme);
    console.log(eventType);
    switch (eventType) {
        case 'free':
            return theme.theme.colors.green;
        case 'paid':
            return theme.theme.colors.blue;
        case 'vip':
            return theme.theme.colors.red;
        default:
            return theme.theme.colors.black;
    }
  }}
`;

