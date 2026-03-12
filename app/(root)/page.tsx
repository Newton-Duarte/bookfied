import BookCard from "@/components/book-card";
import HeroSection from "@/components/hero-section";
import { getAllBooks } from "@/lib/actions/book.actions";

const Page = async () => {
  const booksResult = await getAllBooks()
  const books = booksResult.success ? booksResult.data ?? [] : []

  return (
    <main className="wrapper container">
      <HeroSection />
      <div className="library-books-grid">
        {books.map((book) => (
          <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
        ))}
      </div>
    </main>
  );
};

export default Page;
