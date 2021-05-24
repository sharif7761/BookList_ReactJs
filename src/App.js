import './App.css';
import Book from "./components/Book";
import './index.css'
import data from './data'

function App() {
    return (
        <section className="booklist">
            {
               data.map((book)=>{
                   return (
                       <Book img={book.img}
                             title={book.title}
                             author={book.author}>
                       </Book>
                   )
               })
            }

        </section>
    );
}

export default App;
