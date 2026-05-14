import { siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-sm" style={{ backgroundColor: "oklch(28% 0.09 38)", color: "oklch(70% 0.04 38)" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="font-semibold text-white mb-1">{siteConfig.siteName}</p>
          <p>
            Serving {siteConfig.city}, {siteConfig.state} and surrounding communities
          </p>
          <p className="mt-1">
            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Contact</p>
          <p>
            <a href={siteConfig.phoneHref} className="hover:text-amber-400 transition-colors">
              {siteConfig.phone}
            </a>
          </p>
          <p>{siteConfig.email}</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Service Areas</p>
          <p>{siteConfig.serviceArea.join(" · ")}</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-white/10 text-xs text-center">
        © {year} {siteConfig.siteName}. Licensed & Insured · {siteConfig.city}, {siteConfig.state}
      </div>
    </footer>
  );
}
