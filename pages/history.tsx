import { GetStaticProps } from "next";
import { HistoryTemplate } from "templates";

interface Props {
  readonly histories: readonly HistoryData[];
}

function History({ histories }: Props) {
  return <HistoryTemplate histories={histories} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/kv/HISTORY`);
  const histories = await response.json();
  return { props: { histories } };
};

export default History;
