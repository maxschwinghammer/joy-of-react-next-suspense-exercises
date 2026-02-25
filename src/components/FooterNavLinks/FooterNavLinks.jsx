import React from "react";

import { getNavLinks } from "@/helpers/web-base-helpers";
import Link from "next/link";

async function FooterNavLinks() {
  const navLinks = await getNavLinks();

  return (
    <ol>
      {navLinks.map(({ slug, label, href }) => (
        <li key={slug}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ol>
  );
}

export default FooterNavLinks;
