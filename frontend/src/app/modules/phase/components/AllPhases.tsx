import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllPhases, selectAllPhases, selectPhaseStatus } from "../phase.slice";
import { PhaseItem } from "./PhaseItem";

export function AllPhases() {
    console.log("all phases")
    const phases = useSelector(selectAllPhases)
    const phaseStatus = useSelector(selectPhaseStatus)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllPhases())
    }, [dispatch])
    return (
        <Container >
            <h2 className="mt-3">
              PHASES  
            </h2>
            <hr />
            {phaseStatus === "loading" ? <div>
                loading...
            </div> :
                phases.map(phase =>
                    <div key={phase.id} className="mt-3"> 
                        <PhaseItem phase={phase} onClick={() => navigate(`/${phase.id}`)} />
                    </div>
                )}
        </Container>
    )
}
