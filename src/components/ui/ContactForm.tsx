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
      <div className="text-center p-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
          <FaPaperPlane className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[--text-primary]">¡Mensaje enviado!</h3>
        <p className="text-[--text-secondary] mb-6">
          Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
          className="btn-secondary"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-[--text-primary] font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            required
            className="form-input"
            value={formState.name}
            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
            disabled={formState.submitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[--text-primary] font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="form-input"
            value={formState.email}
            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
            disabled={formState.submitting}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[--text-primary] font-medium mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            value={formState.phone}
            onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
            disabled={formState.submitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[--text-primary] font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="form-input"
            value={formState.message}
            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
            disabled={formState.submitting}
          />
        </div>

        {formState.error && (
          <div className="text-red-500 text-sm animate-fade-in">
            {formState.error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="submit"
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            disabled={formState.submitting}
          >
            {formState.submitting ? (
              <span className="inline-block animate-pulse-slow">Enviando...</span>
            ) : (
              <>
                <FaPaperPlane aria-hidden="true" />
                <span>Enviar mensaje</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <FaWhatsapp aria-hidden="true" className="text-lg" />
            <span>WhatsApp</span>
          </a>
        </div>
      </form>
    </div>
  );
}