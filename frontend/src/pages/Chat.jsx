export default function Chat() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full w-full max-w-full flex flex-col justify-between">
      {/* Área de mensagens */}
      <div className="space-y-6 overflow-y-auto mb-4">
        {/* Mensagem de exemplo de outra pessoa */}
        <div className="flex flex-col items-start">
          <span className="text-sm text-gray-600">Maria Silva</span>
          <div className="bg-gray-300 text-gray-800 p-3 rounded-lg max-w-xs shadow-md">
            Olá, pessoal! Alguém já começou o projeto?
          </div>
          <span className="text-xs text-gray-500 mt-1">09:32 AM</span>
        </div>

        {/* Mensagem de exemplo do usuário */}
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-600">Você</span>
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs shadow-md">
            Oi, Maria! Estou começando agora.
          </div>
          <span className="text-xs text-gray-300 mt-1">09:34 AM</span>
        </div>

        {/* Outra mensagem de outra pessoa */}
        <div className="flex flex-col items-start">
          <span className="text-sm text-gray-600">Carlos Oliveira</span>
          <div className="bg-gray-300 text-gray-800 p-3 rounded-lg max-w-xs shadow-md">
            Bom dia, gente! Precisamos definir as tarefas.
          </div>
          <span className="text-xs text-gray-500 mt-1">09:36 AM</span>
        </div>

        {/* Outra mensagem do usuário */}
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-600">Você</span>
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs shadow-md">
            Concordo, Carlos. Vamos fazer uma lista?
          </div>
          <span className="text-xs text-gray-300 mt-1">09:37 AM</span>
        </div>
      </div>

      {/* Campo de entrada para enviar mensagens */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Enviar
        </button>
      </div>
    </div>
  );
}
