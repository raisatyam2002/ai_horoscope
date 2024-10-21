import ReactFlipCard from "reactjs-flip-card";

export default function FlipCard({
  fieldName,
  fieldState,
  color,
}: {
  fieldName: string;
  fieldState: string | undefined;
  color: string;
}) {
  const styles = {
    card: {
      background: color,
      color: "white",
      borderRadius: 10,
      textAlign: "center" as const,
    },
    check: {
      height: "200px",
      width: "400px",
    },
  };

  return (
    <ReactFlipCard
      containerStyle={styles.check}
      frontStyle={styles.card}
      backStyle={styles.card}
      frontComponent={<div>{fieldName}</div>}
      backComponent={<div>{fieldState}</div>}
    />
  );
}
