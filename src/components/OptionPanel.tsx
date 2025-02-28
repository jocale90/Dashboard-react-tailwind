import { useState } from "react";
import { FaSyncAlt, FaCalendarAlt } from "react-icons/fa";

export default function OptionPanel() {
  const [origin, setOrigin] = useState("VALDIVIA");
  const [destination, setDestination] = useState("SANTIAGO");
  const [date, setDate] = useState("28-02-2025");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-wrap items-center justify-between">
      {/* Origen y Destino */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded-lg">
          <span className="font-bold text-lg">2</span>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="bg-transparent text-white font-bold text-lg outline-none pl-2"
          />
        </div>
        <FaSyncAlt className="text-gray-500 cursor-pointer" />
        <div className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded-lg">
          <span className="font-bold text-lg">1</span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-transparent text-white font-bold text-lg outline-none pl-2"
          />
        </div>
      </div>

      {/* Fecha */}
      <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg">
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="outline-none"
        />
        <FaCalendarAlt className="text-gray-500 ml-2" />
      </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">F5 Consulta boleto</button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">F6 Confirmación</button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">F7 Arqueo cajero</button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">F8 Mis cajas</button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">F9 Imprime WEB</button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">F10 Gastos Agencia</button>
          </div>


     

    </div>
  );
}
