import type {MetadataRoute} from "next"; import {siteConfig} from "@/config/site";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["","/privacy","/terms"].map(path=>({url:`${siteConfig.domain}${path}`,lastModified:new Date()}))}
