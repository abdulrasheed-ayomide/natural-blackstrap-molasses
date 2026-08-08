import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppContactUrl } from '../../utils/whatsapp.js';

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppContactUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-soft transition-transform duration-200 hover:scale-110 active:scale-95 xs:bottom-6 xs:right-6"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
