const fetchData = async () => {
  const res = await fetch("../assets/json/data.json");
  const json = await res.json();
  return json;
};
export { fetchData };
