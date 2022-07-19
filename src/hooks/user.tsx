export function withUser<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof NavItem>) => <Component {...(props as T)} />;
}
