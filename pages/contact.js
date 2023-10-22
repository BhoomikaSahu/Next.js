import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <Layout title='contact us page'>
      <div style={{ textAlign: "center" }}>
        I am contact
        <Image
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg&_gl=1*1jqwkft*_ga*Nzk2NzU3OTY2LjE2Njc0NzIwMDk.*_ga_8JE65Q40S6*MTY2NzQ3MjAxMC4xLjEuMTY2NzQ3MjAxNC4wLjAuMA.."
          alt="image"
          width="500"
          height="400"
        ></Image>
      </div>
    </Layout>
  );
};

contact.auth = true;

export default contact;
