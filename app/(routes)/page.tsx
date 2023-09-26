import GetBillboards from "@/actions/GetBillboards";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await GetBillboards("548b8bee-2808-480b-9474-af94d49229a5");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
