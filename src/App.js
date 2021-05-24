import './App.css';
import Book from "./components/Book";
import './index.css'
import data from './data'

function App() {
    return (
        <section className="booklist">
            {
               data.map((book)=>{
                   const {id, img, title, author} = book
                   return (
                       <Book key={id}
                             img={img}
                             title={title}
                             author={author}>
                       </Book>
                   )
               })
            }

        </section>
    );
}

export default App;
