import TaxReturnsList from "./components/list";

async function getData() {
  const res = await fetch("https://api.quotable.io/random?tags=technology");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function TaxReturnsPage() {
  const data = await getData();

  return (
    <TaxReturnsList
      data={[
        {
          id: "string0",
          name: "string0",
          status: "string",
          year: 2020,
          fileNumber: "string",
        },
        {
          id: "string1",
          name: "string1",
          status: "string",
          year: 2021,
          fileNumber: "string",
        },
      ]}
    />
  );
}
