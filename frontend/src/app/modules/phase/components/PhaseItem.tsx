import { Card } from "react-bootstrap";
import { Phase } from "./types/phase.interface";

interface PhaseItemProps {
    phase: Phase,
    onClick?: Function
}

export function PhaseItem(props: PhaseItemProps) {
    let { phase, onClick } = props
    return (
        <div style={{ cursor: "pointer" }}>
            <Card onClick={e => onClick ? onClick(e) : null}>
                <Card.Body>
                    <Card.Title>
                        {phase.name}
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}