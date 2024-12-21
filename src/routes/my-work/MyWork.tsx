import Container from "@/components/ui/container";
import { AsyncImage } from "loadable-image";
import { imageLinksNumber } from "@/data/myWorkPage";
import { Fade } from "transitions-kit";

const MyWork = () => {
  const options = [];

  for (let i = 0; i <= imageLinksNumber; i++) {
    options.push(`myWork/${i}-.jpg`);
  }
  return (
    <Container className=" pt-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {options.map((image) => (
          <AsyncImage
            src={image}
            style={{
              zIndex: 0,
              width: "100%",
              height: "auto",
              aspectRatio: 9 / 12,
              borderRadius: 10,
            }}
            loader={<div style={{ background: "rgba(183, 145, 123,0.5)" }} />}
            error={<div style={{ background: "rgba(183, 145, 123,0.5)" }} />}
            Transition={Fade}
          />
        ))}
      </div>
    </Container>
  );
};

export default MyWork;
