import {HeaderContainer, TicketIcon} from "./Header.styles.ts";

export const Header = () => {
    return (
        <HeaderContainer>
            <TicketIcon size={36}/>
            <h1>To<span>do</span></h1>
        </HeaderContainer>
    );
};