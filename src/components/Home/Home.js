import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";
import Container from "../Container/Container";

const Home = () => {
    return(
        <Container>
            <Hero />
            <SearchForm />
            <List />
        </Container>
    );
}
export default Home;