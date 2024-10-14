"use client";

import { Suspense } from "react";
import ReferredUser from "./ReferredUserComponent"; // The actual referral page component

export default function ReferralPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReferredUser />
    </Suspense>
  );
}
