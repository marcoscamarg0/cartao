const Success = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Eba!!! Seu cartão não foi clonado!!
          </h2>
          <p className="text-gray-600 mb-6">
            Segundo nosso dados, seu cartão não foi clonado, mas é sempre bom testar, volte sempre!
          </p>
          <a 
            href="/" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    );
  };
  
  export default Success;