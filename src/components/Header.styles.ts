import styled from 'styled-components';
import {Ticket} from "@phosphor-icons/react";

export const HeaderContainer =styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12.5rem;
    background: ${({theme}) => theme.colors.gray700};
    
    h1{
        color: ${({theme}) => theme.colors.blue300};
        font-size: 2.5rem;
        span {
            color: ${({theme}) => theme.colors.purple500};
        }
    }
`

export const TicketIcon = styled(Ticket)`
    margin-right: 0.75rem;
    font-size: 2.5rem;
    color: ${({theme}) => theme.colors.purple500};
`;