import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <header className="bg-slate-900 text-white flex justify-between py-4 px-8">
            <div>
                <h1 className="font-bold text-2xl">Tasks App</h1>
            </div>
            <div className="flex gap-3">
                <Link className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" to="/tasks">Task Page</Link>
                <Link className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" to="/tasks/create">Create task</Link>
            </div>
        </header>
    );
}