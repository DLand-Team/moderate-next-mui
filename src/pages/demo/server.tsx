import { useAppSelector } from "@/common/hooks";
import { wrapper } from "@/services2/stores/store";
import { NextPage } from "next";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface OtherProps {
  getServerSideProp: string;
  appProp: string;
}

const Server: NextPage<OtherProps> = ({ appProp, getServerSideProp }) => {
  const { detailPage } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="server">
      <p>
        Page has access to store even though it does not dispatch anything
        itself
      </p>
      <nav>
        <Link href="/">Navigate to index</Link>
      </nav>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch({ type: "PAGE", payload: "server" });
    return { props: { getServerSideProp: "bar" } };
  }
);

export default Server;
