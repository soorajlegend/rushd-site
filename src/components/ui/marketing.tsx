import { Button } from "./button"

const Marketing = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form')
    formElement?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Take Control of Your Bookings & Cut OTA Costs
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Rushd provides property owners with their own branded booking website to accept direct payments, eliminating high OTA commission fees.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Register Interest
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Marketing
