import styled from 'styled-components';

export const FabCreateButtonWrapper = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 2.5%;
    right: 2.5%;
    & > button
    {
        box-shadow: 3px 0 30px 1px rgba( 0 , 0 , 0 , .4 );
        border-radius: 100%;
        width: 70px;
        height: 70px;
    }
`

export const FabDeleteButtonWrapper = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 2.5%;
    left: 2.5%;
    & > button
    {
        box-shadow: 3px 0 30px 1px rgba( 0 , 0 , 0 , .4 );
        border-radius: 100%;
        width: 70px;
        height: 70px;
    }
`

export const ImageLogoNavbar = styled.img`
    width: 160px;
    max-height: 57px !important;
`