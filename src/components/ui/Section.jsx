import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}