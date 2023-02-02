import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
    
`;
const Calculator: React.FC<{}> = () => {
    return (
        <Container>
            <Grid>
                <Button label="AC" position={[0, 0]} width={2} />
                <Button label="Undo" position={[0, 2]} width={2} />
                <Button label="9" />
                <Button label="8" />
                <Button label="7" />
                <Button label="6" />
                <Button label="5" />
                <Button label="4" />
                <Button label="3" />
                <Button label="2" />
                <Button label="1" />
            </Grid>
        </Container>
    );
};

export default Calculator;
