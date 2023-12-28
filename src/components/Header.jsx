export function Header() {

  return (
    <div className="text-4xl font-bold text-center my-5 text-white">
      <div className="flex justify-between items-start">
        <span>Seguimiento de gastos</span>
        <a href="http://localhost:3000/index.html">
        <input
          type="button"
          value="Salir"
          className="bg-red-500 text-white px-3 py-1 rounded shadow-md text-sm self-start cursor-pointer"
        />
        </a>
      </div>
    </div>
  );
}
