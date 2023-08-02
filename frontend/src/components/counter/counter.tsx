import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import "../../counter.css";


export default function Counter() {
    const [totalCount, setTotalCount] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [bead, setBead] = useState<number>(0);

    const updateBead = () => {
        if (count === 108) {
            setBead(bead + 1);
            setCount(0);
        }
    }

    const increment = () => {
        setTotalCount(totalCount + 1);
        setCount(count + 1);
        updateBead();
    };

    const decrement = () => {
        setTotalCount(totalCount - 1);
        setCount(count - 1);
        updateBead();
    }

    const resetCounts = () => {
        setTotalCount(0);
        setCount(0);
        setBead(0);
    }

    const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        console.log(event.code);

        if (event.code === "ArrowLeft") {
            decrement();
        }

        if (event.code === "ArrowRight") {
            increment();
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                minWidth: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column', // Stack content vertically
                textAlign: 'center', // Center content inside the Container
                backgroundColor: '#090a11',
                color: '#ffffff'

            }}
            tabIndex={0}
            onKeyDown={keyDownHandler}
        >
            <Container fluid style={{ margin: '0 auto' }}>
                <p>Total: {totalCount}</p>
                <p>Current Total: {count}</p>
                <p className="extra-margin">Beads: {bead}</p>
                <div className="row-margin">
                    <Button variant="dark" onClick={resetCounts}>Reset</Button>
                </div>
                <div className="row-margin">
                    <Button variant="dark" onClick={decrement}>Subtract</Button>
                </div>
                <div className="row-margin">
                    <Button variant="dark" size="lg" onClick={increment}>Add</Button>
                </div>
            </Container>
        </div>
    );
}