import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain), title:{default:siteConfig.companyLegalName,template:"%s | Simpul Karya Digital Teknologi"}, description:siteConfig.description,
  openGraph:{type:"website",url:siteConfig.domain,title:siteConfig.companyLegalName,description:siteConfig.description,siteName:siteConfig.companyBrandName},
  twitter:{card:"summary_large_image",title:siteConfig.companyLegalName,description:siteConfig.description}, robots:{index:true,follow:true}, icons:{icon:"/images/skd-mark.png"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
