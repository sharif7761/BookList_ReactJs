import './App.css';
import Book from "./components/Book";
import './index.css'

function App() {
    return (
        <section className="booklist">
            <Book img="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
                  title="I Love You to the Moon and Back"
                  author="Amelia Hepworth">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,</p>
            </Book>
            <Book img="https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg"
                  title="Oh, the Places You'll Go!  "
                  author="Dr. Seuss"/>
        </section>
    );
}

export default App;
