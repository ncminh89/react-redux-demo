import { Task } from "./types/task.interface";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { Card } from "react-bootstrap";
import { MyChip } from "../../../utils/chip";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
const moment = require("moment")

interface TaskItemProps {
   task: Task
}

export function TaskItem(props: TaskItemProps) {
   let { task } = props
   function getShortName(name: string) {
      var arr = name.split(" ")
      if (arr.length >= 2) {
         return arr[0].substr(0, 1) + arr[1].substr(0, 1)
      } else {
         return arr[0].substr(0, 1)
      }
   }

   function getDueDate(date: Date): string {
      return "Due " + moment(date).fromNow()
   }

   function getDateColor(date: Date): string {
      if (date) {
         var diff: number = moment().diff(moment(date), "days")
         if (diff < 0) {
            return "#FFEE58"
         } else {
            return "orange"
         }
      } else {
         return "grey"
      }
   }

   var dateColor = getDateColor(task.dueDate)

   var checkBoxStyle = { backgroundColor: "#f4f5f7" }
   return (
      <div className="d-flex mb-2 align-items-start" style={{ position: "relative", zIndex: 999 }}>
         <div className="me-2" >
            <div className="d-inline" >
               {task.completed ? <MdCheckBox size={20} color="green" style={checkBoxStyle} /> : <MdCheckBoxOutlineBlank size={20} style={checkBoxStyle} />}
            </div>
         </div>
         <Card className="px-3 py-2" style={{ width: "100%" }}>
            <div className="d-flex">
               <div className="fs-6 fw-bold flex-grow-1">
                  {task.name}
               </div>
               {
                  task.assigneeName ?
                     <div className="me-2" style={{ position: "relative", zIndex: 999 }}>
                        <MyChip text={getShortName(task.assigneeName)} borderRadius={12} width={24} height={24}  ></MyChip>
                     </div> :
                     <div className="me-2" style={{ position: "relative", zIndex: 999 }}>
                        <MyChip text={""} icon={<AiOutlineUser size={13} color={"grey"} className="mb-1" />} borderRadius={12} width={24} height={24} borderColor={"grey"}  ></MyChip>
                     </div>
               }
               {
                  task.dueDate ?
                     <div className="">
                        <MyChip text={getDueDate(task.dueDate)} height={24} icon={<AiOutlineCalendar size={15} className="mb-1 me-1" color={dateColor} />} borderRadius={4} borderColor={dateColor} textColor={dateColor}></MyChip>
                     </div> :
                     <div className="">
                        <MyChip text={""} height={24} icon={<AiOutlineCalendar size={15} className="mb-1" color={"grey"} />} borderRadius={4} borderColor={"grey"} textColor={"grey"}></MyChip>
                     </div>
               }
            </div>
            <div className="fs-6" >
               {task.description}
            </div>
            {
               task.relatedLink &&
               <div className="mt-1" style={{ maxWidth: 150 }}>
                  <MyChip text={task.relatedLink} height={24} icon={<BiLinkExternal size={15} className="mb-1 me-1" color={"#64B5F6"} />} borderRadius={4} bgColor={"#E3F2FD"} borderColor={"transparent"} textColor={"#64B5F6"}></MyChip>
               </div>
            }
         </Card>
      </div>
   )
}