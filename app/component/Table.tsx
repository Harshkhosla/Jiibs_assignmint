import { FaCloudUploadAlt, FaCloudDownloadAlt, FaUserPlus } from "react-icons/fa";
export default function Table() {
    return (
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">People</h1>
          <div className="flex space-x-8 mt-2">
            <button className="text-black font-semibold">People</button>
            <button className="text-gray-500">Properties</button>
          </div>
          <div className="w-full h-1 bg-gray-200 mt-2 mb-4">
            <div className="w-20 h-1 bg-black"></div>
          </div>
        </div>
        <div className="flex items-center justify-between pb-4 bg-white ">
        
          <div className="space-x-2">



            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-white bg-black border  focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100  rounded-2xl text-sm px-3 py-1.5"
              type="button"
            >
             
              Approved
            </button>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-black bg-slate-100  focus:outline-none hover:bg-slate-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-2xl text-sm px-3 py-1.5"
              type="button"
            >
             
             Awaiting Approval
            </button>
  
          
          </div>
  <div className="flex  space-x-4 content-center">


          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl w-72 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by name or email"
            />
            
            
          </div>
          <div className="flex space-x-2">

        
          <button
        id="exportButton"
        className="inline-flex items-center text-black bg-gray-100 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2"
        type="button"
      >
        <FaCloudUploadAlt className="w-5 h-5 mr-2" /> 
        Export
      </button>

     
      <button
        id="bulkAddButton"
        className="inline-flex items-center text-black bg-gray-100 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2"
        type="button"
      >
        <FaCloudDownloadAlt className="w-5 h-5 mr-2" /> 
        Bulk Add
      </button>

     
      <button
        id="addButton"
        className="inline-flex items-center text-white bg-gray-900 focus:outline-none hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
        type="button"
      >
        <FaUserPlus className="w-5 h-5 mr-2" /> 
        Add
      </button>
        </div>
        </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
    <tr>
      <th scope="col" className="p-4">
        <div className="flex items-center">
          <input
            id="checkbox-all-search"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="checkbox-all-search" className="sr-only">
            checkbox
          </label>
        </div>
      </th>
      <th scope="col" className="px-6 py-3">Name</th>
      <th scope="col" className="px-6 py-3">Status</th>
      <th scope="col" className="px-6 py-3">Property</th>
      <th scope="col" className="px-6 py-3">Unit</th>
      <th scope="col" className="px-6 py-3">Role</th>
      <th scope="col" className="px-6 py-3">Last Invited</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-white border-b">
      <td className="p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
        <div>
          <div className="text-base font-semibold">JP</div>
          <div className="font-normal text-gray-500">jyoch12@gmail.com</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="px-2 py-1 text-xs font-medium leading-tight text-green-800 bg-green-100 rounded-full">
          Active
        </span>
      </td>
      <td className="px-6 py-4">-</td>
      <td className="px-6 py-4">Admin</td>
      <td className="px-6 py-4">ABC</td>
      <td className="px-6 py-4">08/15/2024</td>
    </tr>
    {/* Additional rows can be added here */}
  </tbody>
</table>

      </div>
    );
  }
  