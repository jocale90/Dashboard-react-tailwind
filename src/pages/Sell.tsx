import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import CustomTable from "../components/tables/CustomTable";

const sampleData = [
  { ID: 1, Nombre: "Producto A", Precio: "$10" },
  { ID: 2, Nombre: "Producto B", Precio: "$15" },
];

export default function NewPage() {
  return (
    <>
      <PageMeta title="Nueva Página" description="Página de ejemplo con nueva estructura." />
      <PageBreadcrumb pageTitle="Nueva Página" />
      
      <div className="p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold">Mi Nueva Página</h2>
        <p className="text-gray-500">Aquí puedes agregar contenido personalizado.</p>
        
        {/* Reutilizando CustomTable */}
        <CustomTable data={sampleData} />
      </div>
    </>
  );
}
