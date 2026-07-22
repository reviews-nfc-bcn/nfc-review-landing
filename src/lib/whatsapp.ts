const WHATSAPP_NUMBER = "34640610268";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
