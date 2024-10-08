import { Link, useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    // Kun formi on onnistuneesti lähetetty
    // tai jokin aikaraja tulee vastaan, jne
    function navigateHandler (){
        navigate('/products');
    }

    return (        
        <> {/* paketoidaan elementtejä ilman turhia divejä */}        
            <h1>My Home Page</h1>
            <p>Go to <Link to="/products">the list of products</Link></p>
            <p>
                {/* Ei oikeasti käytetä ohjelmallista siirtymistä napilla, vaan käytetään Link */}
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
}

export default HomePage;