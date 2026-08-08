import { formatCurrency } from './formatCurrency';

export const BUSINESS_WHATSAPP_NUMBER = '2349162231321'; // TODO: replace with real WhatsApp number

export function buildOrderMessage({ cart, totalPrice, customer }) {
  const lines = [];
  lines.push('Hello,');
  lines.push('');
  lines.push('I would like to place an order.');
  lines.push('');
  lines.push('Order Details');
  lines.push('');

  cart.forEach((item) => {
    lines.push(`Product: ${item.name} (${item.weight})`);
    lines.push(`Quantity: ${item.quantity}`);
    lines.push(`Price: ${formatCurrency(item.price * item.quantity)}`);
    lines.push('');
  });

  lines.push(`Total: ${formatCurrency(totalPrice)}`);
  lines.push('');
  lines.push(`Customer Name: ${customer.name}`);
  lines.push('');
  lines.push(`Phone: ${customer.phone}`);
  lines.push('');
  lines.push(`Delivery Address: ${customer.address}`);
  lines.push('');
  lines.push(`Additional Note: ${customer.note || 'N/A'}`);
  lines.push('');
  lines.push('Thank you.');

  return lines.join('\n');
}

export function getWhatsAppOrderUrl({ cart, totalPrice, customer, number = BUSINESS_WHATSAPP_NUMBER }) {
  const message = buildOrderMessage({ cart, totalPrice, customer });
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppContactUrl(number = BUSINESS_WHATSAPP_NUMBER, message = 'Hello, I have a question about your blackstrap molasses.') {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
