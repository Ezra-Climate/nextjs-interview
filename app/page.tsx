export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl font-bold">EZRA Employees</h1>
        <p className="text-lg">
          Welcome to the EZRA Employee Management System
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Employee List</h2>
        <ul className="list-disc pl-5">
          <li>John (Frontend)</li>
          <li>Mary (Backend)</li>
          <li>Peter (DevOps)</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Add New Employee</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-2 rounded"
          />
          <select
            className="border border-gray-300 p-2 rounded"
            defaultValue=""
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devops">DevOps</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Employee
          </button>
        </form>
      </div>
    </main>
  );
}
