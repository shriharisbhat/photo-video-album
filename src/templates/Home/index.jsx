import TabsView from "../../components/organisms/tabs";
import { Banner } from "../../components/organisms/Banner";
import { DataProvider } from "../../providers/DataProvider";

const Default = (props) => {
  return (
    <>
      <Banner />
      <TabsView />
    </>
  );
};

export const Home = (props) => {
  return (
    <DataProvider>
      <Default {...props} />
    </DataProvider>
  );
};

export default Home;
