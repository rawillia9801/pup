import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ active, variant = "pup", children }) {
  return (
    <div className="page-frame">
      <Header active={active} variant={variant} />
      <main>{children}</main>
      <Footer active={active} variant={variant} />
    </div>
  );
}
