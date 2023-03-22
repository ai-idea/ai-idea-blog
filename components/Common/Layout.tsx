const Container = (props: { children?: React.ReactNode }) => {
  return (
    <main className={"mx-5 lg:mx-35 md:mx-25 sm:mx-20 xl:mx-52 2xl:mx-60"}>
      <div>{props.children}</div>
    </main>
  );
};

const Row = (props: { className?: string; children?: React.ReactNode }) => {
  return <div className={`flex w-full ${props.className}`}>{props.children}</div>;
};

const Col = (props: { className?: string; children?: React.ReactNode }) => {
  return <div className={`${props.className}`}>{props.children}</div>;
};

export { Container,Row,Col };
