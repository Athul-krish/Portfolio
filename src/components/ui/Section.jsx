import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-28 md:py-36 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}