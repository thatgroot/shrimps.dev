import PageLayout from "../layouts/PageLayout";
import SmallPostCard from "../components/card/post/SmallPostCard";

function HomePage() {
  return (
    <PageLayout>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div key={i} className={"mb-4"}>
          <SmallPostCard />
        </div>
      ))}
    </PageLayout>
  );
}

export default HomePage;
