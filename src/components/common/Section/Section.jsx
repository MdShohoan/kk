import cn from "../../../lib/cn"

function Section({children, className}) {
  return (
    <section className={cn("mb-12 md:mb-16", className)}>
        {children}
    </section>
  )
}

export default Section