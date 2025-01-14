// import BookList from "@/components/BookList";
// import BookOverview from "@/components/BookOverview";
// import { db } from "@/database/drizzle";
// import { books, users } from "@/database/schema";
// import { auth } from "@/auth";
// import { desc } from "drizzle-orm";

import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constans";

const Home = async () => (
  <>
    <BookOverview
      {...{
        ...sampleBooks[0],
      }}
      userId={1}
      video="sampleVideoUrl"
    />
    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
