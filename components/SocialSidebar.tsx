import Link from "next/link";

export default function SocialSidebar() {
  // Ganti link di bawah sesuai akun asli Anda
  const socials = [
    { icon: "ri-github-fill", link: "https://github.com/KhaiRii20", label: "GitHub" },
    { icon: "ri-linkedin-fill", link: "https://linkedin.com/in/Muhammad Daffa Khairi Addin", label: "LinkedIn" },
    { icon: "ri-instagram-line", link: "https://instagram.com/dfkhairiii", label: "Instagram" },
    { icon: "ri-whatsapp-line", link: "https://wa.me/6281256568149", label: "WhatsApp" },
  ];

  return (
    <div className="fixed left-6 bottom-0 z-50 hidden md:flex flex-col gap-6 items-center">
      {socials.map((item, index) => (
        <Link 
          key={index} 
          href={item.link} 
          target="_blank"
          className="text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-300 text-2xl"
          aria-label={item.label}
        >
          <i className={item.icon}></i>
        </Link>
      ))}
      {/* Garis Vertikal Dekoratif */}
      <div className="w-[2px] h-24 bg-gradient-to-b from-secondary/50 to-transparent mt-2"></div>
    </div>
  );
}