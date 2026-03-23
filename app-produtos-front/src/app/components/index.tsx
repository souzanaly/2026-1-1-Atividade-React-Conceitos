"use client"; // Necessário no Next.js para componentes com interação (como inputs)

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-800">PROJETO</h1>

      <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Digite o título do produto para pesquisar..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          // No futuro, usaremos o onChange aqui para filtrar a lista
        />
      </form>
    </header>
  );
}