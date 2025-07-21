interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>Header</div>
      {children}
      <div>footer</div>
    </>
  );
}
