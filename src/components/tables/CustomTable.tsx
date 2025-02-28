export default function CustomTable({ data }) {
  return (


    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-3 text-left border-b">Servicio</th>
            <th className="p-3 text-left border-b">Hora</th>
            <th className="p-3 text-left border-b">Día</th>
            <th className="p-3 text-left border-b">Andén</th>
            <th className="p-3 text-left border-b">Origen</th>
            <th className="p-3 text-left border-b">Destino</th>
            <th className="p-3 text-left border-b">Llegada</th>
            <th className="p-3 text-left border-b">Tipo Bus</th>
            <th className="p-3 text-left border-b">Operador</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-3">{row.Servicio}</td>
              <td className="p-3">{row.hora}</td>
              <td className="p-3">{row.dia}</td>
              <td className="p-3">{row.anden}</td>
              <td className="p-3">{row.origen}</td>
              <td className="p-3">{row.destino}</td>
              <td className="p-3">{row.llegada}</td>
              <td className="p-3">{row.tipobus}</td>
              <td className="p-3">{row.operador}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
