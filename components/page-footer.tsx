import { config } from "@/config"

export default function LayoutFooter() {
  return (
    <footer className="Footer mt-12  bg-neutral-300/20">
      <div className="container py-20 grid place-content-center">
        <h3 className="opacity-40 text-4xl font-bold tracking-tighter leading-tight text-center">
          {config.footer}
        </h3>
      </div>
    </footer>
  )
}
