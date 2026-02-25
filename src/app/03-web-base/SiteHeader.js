import React from "react";
import Link from "next/link";

import HeaderNavLinks from "@/components/HeaderNavLinks";

function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <React.Suspense>
          <HeaderNavLinks />
        </React.Suspense>
      </nav>
    </header>
  );
}

export default SiteHeader;
