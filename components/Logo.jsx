import { Heart, PawPrint } from "lucide-react";

export function Logo({ variant = "pup" }) {
  if (variant === "swva") {
    return (
      <div className="logo swva-logo" aria-label="Southwest Virginia Chihuahua">
        <div className="dog-mark"><PawPrint size={28} /><Heart size={13} /></div>
        <div>
          <strong>Southwest Virginia</strong>
          <span>Chihuahua</span>
        </div>
      </div>
    );
  }

  return (
    <div className="logo pup-logo" aria-label="Pup-Lift">
      <div className="drop-mark"><PawPrint size={30} /></div>
      <div>
        <strong>Pup-<em>Lift</em></strong>
        <span>Emergency Support<br />for Tiny Hearts</span>
      </div>
    </div>
  );
}
