const Assignments = () => {
    return (  

        <div>
        <h2 className="text-2xl font-bold text-light-purple mb-6">Assignments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-xl font-bold text-gray-800">Assignment 1</h3>
            <p className="mt-2 text-gray-600">Assignment details go here.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-xl font-bold text-gray-800">Assignment 2</h3>
            <p className="mt-2 text-gray-600">Assignment details go here.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-xl font-bold text-gray-800">Assignment 3</h3>
            <p className="mt-2 text-gray-600">Assignment details go here.</p>
          </div>
        </div>
      </div>

    );
}
 
export default Assignments;