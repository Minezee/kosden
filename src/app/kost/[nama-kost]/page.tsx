export default function DetailKostPage({
  params,
}: {
  params: { "nama-kost": string };
}) {
  return <div>Kost: {params["nama-kost"]}</div>;
}
