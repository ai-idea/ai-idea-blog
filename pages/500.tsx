import {
  FireworkCanvas,
  Footer,
  Container,
  NavBar,
  PageSEO
} from "@/components/Common";
import { SiteMetaData } from "@/data/site-meta";

export default function Custom500Page() {
  return (
    <>
      <FireworkCanvas />
      <PageSEO title={"PAGE NOT FOUND"} />
      <h1 className="text-2xl py-3 text-center font-bold my-auto text-sky-500">
        {SiteMetaData.title}
      </h1>
      <NavBar />
      <Container>
        <div className="flex flex-col justify-center min-h-[70vh]">
          <div className="mx-auto my-auto">
            <div className="text-5xl font-bold text-center my-2">{"500"}</div>
            <h2 className="text-3xl text-center">
              {"Service Internal Error."}
            </h2>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
