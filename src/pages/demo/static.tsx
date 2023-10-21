import { useAppSelector } from "@/common/hooks";
import { wrapper } from "@/services2/stores/store";
import { NextPage } from "next";
import Link from "next/link";

interface OtherProps {
  getStaticProp: string;
  appProp: string;
}

const Static: NextPage<OtherProps> = ({ appProp, getStaticProp }) => {
  const { detailPage } = useAppSelector((state) => state);
  return (
    <div className="static">
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

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch({ type: "PAGE", payload: "static" });
  return { props: { getStaticProp: "bar" } };
});

export default Static;
