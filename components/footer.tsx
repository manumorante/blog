import Container from "./container"

export default function Footer() {
  return (
    <footer className="bg-neutral-950">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="opacity-60 text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Tengo unos proyectos en
          </h3>
          <div className="flex flex-col gap-3 lg:flex-row justify-center items-center text-xl">
            <a
              target="_blank"
              href="https://manumorante.com"
              className="font-bold sm:hover:underline"
            >
              Mi web personal
            </a>
            <a
              href="https://github.com/manumorante"
              target="_blank"
              className="font-bold sm:hover:underline"
            >
              Mira el código en GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
