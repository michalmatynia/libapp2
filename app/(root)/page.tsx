// import BookList from "@/components/BookList";
// import BookOverview from "@/components/BookOverview";
// import { db } from "@/database/drizzle";
// import { books, users } from "@/database/schema";
// import { auth } from "@/auth";
// import { desc } from "drizzle-orm";

import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

const Home = async () => {
  <>
    <BookOverview />
    <BookList />
  </>;
};

export default Home;
