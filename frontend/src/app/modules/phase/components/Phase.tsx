import { useCallback, useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchOnePhase, selectCurrentPhase, selectPhaseStatus } from "../phase.slice"
import { AiFillAppstore } from "react-icons/ai";
import { TaskItem } from "./TaskItem"

export function Phase() {
    console.log("phase")
    let { id } = useParams()
    const dispatch = useDispatch()
    const currentPhase = useSelector(selectCurrentPhase)
    const phaseStatus = useSelector(selectPhaseStatus)
    const [lineHeight, setLineHeight] = useState(0)
    const listRef = useCallback(node => {
        if (node != null) {
            setLineHeight(node.getBoundingClientRect().height)
        }
    }, [])
    useEffect(() => {
        if (id) {
            dispatch(fetchOnePhase(id))
        }

    }, [dispatch, id])

    return (
        <Container>
            {
                phaseStatus === "loading" ?
                    <div>
                        ...loading
                    </div> :
                    <div className="phase-card" style={{ position: "relative" }} >
                        <div ref={listRef} >
                            <div className="d-flex align-items-center h5 fw-bold">
                                <AiFillAppstore size={20} className="me-2" />  {currentPhase?.name}
                            </div>
                            <div className="mt-1" >
                                {currentPhase?.tasks.map((task) => {
                                    return <TaskItem task={task} key={task.id} />
                                })}
                            </div>
                        </div>
                        <div style={{
                            position: "absolute",
                            top: 45,
                            left: 24,
                            height: lineHeight+10,
                            width: 1,
                            backgroundColor: 'grey',
                            zIndex: 0
                        }}></div>

                    </div>
            }
        </Container>

    )
}