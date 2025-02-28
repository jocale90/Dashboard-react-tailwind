import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import CustomTable from "../components/tables/CustomTable";

const sampleData = [
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 1, hora: "20:50", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
  { Servicio: 2, hora: "21:00", dia: "Viernes", anden: "", origen: "Valdivia", destino: "Santiago", llegada: "08:30", Tipobus: "taxibus", operador: "Transantin", },
];

export default function NewPage() {
  return (
    <>
      <PageMeta title="Nueva Página" description="Página de ejemplo con nueva estructura." />
      <PageBreadcrumb pageTitle="Nueva Página" />
      
      <div className="p-6 bg-white shadow rounded-lg">
        {/* Reutilizando CustomTable */}
        <CustomTable data={sampleData} />
      </div>
    </>
  );
}
