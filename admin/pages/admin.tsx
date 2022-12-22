import * as React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../src/components/App"), { ssr: false });

export default function Admin() {
    return <App />
}
