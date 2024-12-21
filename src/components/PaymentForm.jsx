import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    cpf: ''
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Número de cartão inválido';
    }
    
    if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      newErrors.expiry = 'Data inválida';
    }
    
    if (formData.cvv.length !== 3) {
      newErrors.cvv = 'CVV inválido';
    }
    
    if (formData.name.length < 3) {
      newErrors.name = 'Nome inválido';
    }
    
    if (!formData.cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
      newErrors.cpf = 'CPF inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Formatação em tempo real
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
    } else if (name === 'expiry') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').slice(0, 5);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    } else if (name === 'cpf') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').slice(0, 14);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
    
    // Limpa o erro do campo quando o usuário começa a digitar novamente
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">
          💳 Teste se seu cartão já foi clonado!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número do Cartão
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.cardNumber ? 'border-red-500' : 'border-gray-300'
              } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data de Validade
              </label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/AA"
                value={formData.expiry}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.expiry ? 'border-red-500' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
              />
              {errors.expiry && (
                <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.cvv ? 'border-red-500' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome no Cartão
            </label>
            <input
              type="text"
              name="name"
              placeholder="Digite o nome como está no cartão"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CPF
            </label>
            <input
              type="text"
              name="cpf"
              placeholder="123.456.789-00"
              value={formData.cpf}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.cpf ? 'border-red-500' : 'border-gray-300'
              } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
            />
            {errors.cpf && (
              <p className="text-red-500 text-sm mt-1">{errors.cpf}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-6"
          >
            Realizar teste ✨
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;