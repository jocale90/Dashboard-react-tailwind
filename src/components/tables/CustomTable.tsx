export default function CustomTable({ data }) {
    return (
      
        
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg shadow-md w-full min-w-[600px]">
        <thead>
        <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 transition">

            {Object.keys(data[0]).map((key) => (
              <th key={key} className="p-3 text-left border-b">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
              {Object.values(row).map((value, i) => (
                <td key={i} className="p-3">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  