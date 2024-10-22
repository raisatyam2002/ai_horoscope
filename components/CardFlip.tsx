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
    frontCard: {
      background: "grey",
      color: "white",
      borderRadius: 10,
      textAlign: "center" as const,
      fontSize: "20px",
      paddingTop: "50px",
    },
    backCard: {
      background: color,
      color: "white",
      borderRadius: 10,
      textAlign: "center" as const,
      paddingTop: "50px",
    },
    check: {
      height: "200px",
      width: "400px",
    },
  };

  return (
    <ReactFlipCard
      containerStyle={styles.check}
      frontStyle={styles.frontCard}
      backStyle={styles.backCard}
      frontCss=""
      frontComponent={<div>{fieldName.toUpperCase()}</div>}
      backComponent={<div>{fieldState}</div>}
    />
  );
}
