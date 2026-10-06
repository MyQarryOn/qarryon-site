"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { trackEstimateStarted } from "../analytics";

type TrackingLinkProps = {
  href: string;
  source: string;
  tier?: string;
  className?: string;
  children: ReactNode;
};

export function TrackingLink({
  href,
  source,
  tier,
  className,
  children,
}: TrackingLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEstimateStarted(source, tier)}
    >
      {children}
    </Link>
  );
}
