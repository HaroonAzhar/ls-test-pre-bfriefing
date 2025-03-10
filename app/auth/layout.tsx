export default function CartLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        {children}
        <div>
          <h2>Featured products section</h2>
        </div>
      </div>
    );
  }