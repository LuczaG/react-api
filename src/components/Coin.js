import React from 'react'
import styled from 'styled-components'

const CoinContainer = styled.div`
    
    height: 300px;
    width: 400px;
    background: #f0f0f0;
    marign-bottom: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
    `;

const Img = styled.img`
    width: 64px;
    height: 64px;
    `;

const Button = styled.button`
    padding: 15px 35px;
    border-radius: 10px;
    border: none;
    background: rgb(48,48,252);
    color: #fff;
    cursor: pointer;
    `;

const Coin = ({ name, symbol, icon, price }) => {
    return (
        <CoinContainer>
            <h2>Név: {name}</h2>
            <Img src={icon} alt={name} />
            <h3>Ár: {price} HUF</h3>
            <h3>Ikon: {symbol} HUF</h3>
            <Button>Vétel</Button>
        </CoinContainer>
    )
}

export default Coin