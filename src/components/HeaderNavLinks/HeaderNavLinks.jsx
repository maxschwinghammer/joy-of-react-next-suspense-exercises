import React from "react";

import { getNavLinks } from "@/helpers/web-base-helpers";
import Link from "next/link";

async function HeaderNavLinks() {
  let navLinks = await getNavLinks();
  navLinks = navLinks.slice(0, 4);

  return (
    <ol className="header-nav-links">
      {navLinks.map(({ slug, label, href, type }) => (
        <li key={slug}>
          <Link href={href} className={`header-nav-link ${type}`}>
            {label}
          </Link>
        </li>
      ))}
      ;
    </ol>
  );
}

export default HeaderNavLinks;
