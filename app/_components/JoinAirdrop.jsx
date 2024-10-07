import { cardData } from "../_data/card";
import Button from "./Button";

function JoinAirdrop() {
  return (
    <section className="mt-24 bg-[#ECFDF5]">
      <h2 className="text-6xl font-bold neon-heading leading-tight uppercase text-center py-12">
        How to join AirDrop
      </h2>

      <div className="container-div grid grid-cols-2 gap-6">
        {cardData?.map((data) => (
          <article
            className="w-[566px] h-[280px] gradient-card p-6 space-y-2  "
            key={data.step}
          >
            <h3 className=" heading-h3 font-bold">Step {data.step}</h3>
            <h3 className="text-primary-text-grey-1 font-bold">{data.title}</h3>
            <p className="text-primary-bg-gray py-2">{data.description}</p>
            {data.button && <Button className="px-20 py-2 text-base">{data.button}</Button>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default JoinAirdrop;
