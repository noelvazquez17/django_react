/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
    const navigate = useNavigate();
    return (
        <div className="rounded-md shadow-md bg-blue-950 hover:bg-blue-800 text-white hover:cursor-pointer p-3"
        onClick={() => {
            navigate(`/tasks/${task.id}`)
        }}>
            <h2 className="font-bold text-center">{task.title}</h2>
            <p className="text-justify">{task.description}</p>
        </div>
    );
}