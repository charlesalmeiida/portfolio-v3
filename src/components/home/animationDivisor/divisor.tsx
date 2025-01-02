import { Container } from "@/components/container"
import { ItemTech } from "./item-tech"
import itemsTech from "@/data/techs-animation.json"

export function Divisor() {
  return (
    <section className="bg-blueLight py-6">
      <Container>
        <div className="scroll-wrapper">
          <div className="scroll-animation scroll-content">
            {itemsTech.map((item, index) => (
              <ItemTech
                key={index}
                image={item.icon}
                width={item.width}
                height={item.height}
              >
                {item.name}
              </ItemTech>
            ))}
            {itemsTech.map((item, index) => (
              <ItemTech
                key={index}
                image={item.icon}
                width={item.width}
                height={item.height}
              >
                {item.name}
              </ItemTech>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
