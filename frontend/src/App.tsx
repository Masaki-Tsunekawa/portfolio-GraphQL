import { gql } from "apollo-boost";
import "./App.css";
import { useQuery } from "@apollo/client";

interface Book {
  title: string;
  author: string;
}

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

console.log(BOOKS);

function Books() {
  const { loading, error, data } = useQuery(BOOKS);
  console.log(data);

  if (error) {
    return <p>Error Occured</p>;
  }

  if (loading) {
    return <p>Now Loading...</p>;
  }

  return data.test.map(({ title, author }: Book) => (
    <div key={title}>
      <p>
        {author}: {title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <>
      <h2>GraphQL Client</h2>
      <Books />
    </>
  );
}

export default App;
