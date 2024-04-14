import MenuPage from "@/components/templates/MenuPage";
import React from "react";

function index({ data }) {
  
  return (
    <div>
      <MenuPage data={data} />
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3005/data");

  const json = await res.json();
  // console.log(json)
  return {
    props: { data: json },
    revalidate: 10, //secound
  };
}
