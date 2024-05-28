import {HeaderContainer, SpanMain, TicketIcon, TitleMain} from "./Header.styles.ts";

export const Header = () => {
    return (
        <HeaderContainer>
            <TicketIcon size={36}/>
            <TitleMain>To<SpanMain>do</SpanMain></TitleMain>
        </HeaderContainer>
    );
};