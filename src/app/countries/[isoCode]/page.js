export default async function CountryPage({ params }) {
  const res = await fetch(
    "https://restcountries.com/v3.1/alpha/" + params.isoCode
  );
  const country = await res.json();
  console.log(country);

  return (
    <>
      <img
        src={`https://countryflagsapi.netlify.app/flag/${params.isoCode}.svg`}
        className="w-64"
      ></img>
      <h1>{params.isoCode}</h1>
      <p>{JSON.stringify(country)}</p>
    </>
  );
}
