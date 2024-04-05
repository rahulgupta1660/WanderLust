import Card from "./components/Card";
import CardShimmer from "./components/CardShimmer";
import useFetch from "./components/customHooks/useFetch";

const App = () => {
  const { data, loading } = useFetch(
    `https://wanderlust-api-pynr.onrender.com/api/listings`
  );

  if (loading) {
    return <CardShimmer />;
  }

  return (
    <>
      <Card listings={data} />
    </>
  );
};

export default App;
