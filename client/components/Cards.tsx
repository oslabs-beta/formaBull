import React from 'react';
import { Card, Button } from 'react-bootstrap';
export default function CardCreator(props:any) {

    return (
        <Card style={{border: '1px solid black'}}>
        <Card.Body>
            <Card.Title>Test</Card.Title>
            <Card.Text>
            All I want is Drag and Drop functionality
            </Card.Text>
            <Button variant="primary">Do Something</Button>
        </Card.Body>
        </Card>
    )
}