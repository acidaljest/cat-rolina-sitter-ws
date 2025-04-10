'use client';

import { useState } from 'react';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    submitted: false,
    submitting: false,
    error: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true, error: '' }));

    try {
      // Aquí iría la lógica de envío del formulario
      // Por ahora solo simulamos un delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormState(prev => ({
        ...prev,
        submitted: true,
        submitting: false
      }));
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        submitting: false,
        error: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      }));
    }
  };

  if (formState.submitted) {
    return (
      <div className="text-center p-6 tablet:p-8 animate-fade-in bg-[#f9f5f1] rounded-lg border border-[#e1d5c5] max-w-lg mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 tablet:w-16 tablet:h-16 rounded-full bg-[#fdf1e7] text-[#c44400] mb-4">
          <FaPaperPlane className="w-6 h-6 tablet:w-8 tablet:h-8" />
        </div>
        <h3 className="text-lg tablet:text-xl font-semibold mb-2 text-[#391502]">¡Mensaje enviado!</h3>
        <p className="text-[#63320b] mb-6 text-base tablet:text-lg">
          Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
          className="btn-secondary hover:bg-[#fdf1e7] text-base tablet:text-lg py-2 tablet:py-3 px-6 tablet:px-8"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 tablet:space-y-6 bg-[#f9f5f1] p-4 tablet:p-6 lg:p-8 rounded-lg border border-[#e1d5c5]">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-6">
          <div>
            <label htmlFor="name" className="block text-[#391502] font-medium mb-1 tablet:mb-2 text-base tablet:text-lg">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              required
              className="form-input bg-white border-[#e1d5c5] focus:border-[#c44400] focus:ring-[#c44400] text-[#391502] text-base tablet:text-lg h-10 tablet:h-12"
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
              disabled={formState.submitting}
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#391502] font-medium mb-1 tablet:mb-2 text-base tablet:text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="form-input bg-white border-[#e1d5c5] focus:border-[#c44400] focus:ring-[#c44400] text-[#391502] text-base tablet:text-lg h-10 tablet:h-12"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              disabled={formState.submitting}
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-[#391502] font-medium mb-1 tablet:mb-2 text-base tablet:text-lg">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input bg-white border-[#e1d5c5] focus:border-[#c44400] focus:ring-[#c44400] text-[#391502] text-base tablet:text-lg h-10 tablet:h-12"
            value={formState.phone}
            onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
            disabled={formState.submitting}
            placeholder="+56 9 1234 5678"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[#391502] font-medium mb-1 tablet:mb-2 text-base tablet:text-lg">
            Mensaje
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="form-input bg-white border-[#e1d5c5] focus:border-[#c44400] focus:ring-[#c44400] text-[#391502] text-base tablet:text-lg min-h-[120px] tablet:min-h-[150px]"
            value={formState.message}
            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
            disabled={formState.submitting}
            placeholder="Cuéntanos sobre tu gato y qué servicio necesitas..."
          />
        </div>

        {formState.error && (
          <div className="text-[#c44400] text-sm tablet:text-base animate-fade-in bg-[#fdf1e7] p-3 tablet:p-4 rounded border border-[#c44400]">
            {formState.error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <button
            type="submit"
            className="btn-primary bg-[#c44400] hover:bg-[#a33800] text-white w-full sm:w-auto flex items-center justify-center gap-2 text-base tablet:text-lg py-3 tablet:py-4 min-h-[44px] tablet:min-h-[48px]"
            disabled={formState.submitting}
          >
            {formState.submitting ? (
              <span className="inline-block animate-pulse-slow">Enviando...</span>
            ) : (
              <>
                <FaPaperPlane aria-hidden="true" className="text-base tablet:text-lg" />
                <span>Enviar mensaje</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary bg-white hover:bg-[#fdf1e7] border-[#c44400] text-[#c44400] w-full sm:w-auto flex items-center justify-center gap-2 text-base tablet:text-lg py-3 tablet:py-4 min-h-[44px] tablet:min-h-[48px]"
          >
            <FaWhatsapp aria-hidden="true" className="text-lg tablet:text-xl" />
            <span>WhatsApp</span>
          </a>
        </div>
      </form>
    </div>
  );
}