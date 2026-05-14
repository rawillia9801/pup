import "./globals.css";

export const metadata = {
  title: "Pup-Lift | Emergency Support for Tiny Hearts",
  description: "Pup-Lift guidance for hypoglycemia episodes in tiny puppies."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
