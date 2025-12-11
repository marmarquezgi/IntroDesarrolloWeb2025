import {Profile} from './ProfileWithParams.jsx'
const datos =[
    {
        URL:"https://invdes.com.mx/wp-content/uploads/2017/12/06-12-17-curie.jpg",
        ALT"Marie Curie",
},
{
    URL:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Charles_Darwin_portrait.jpg",
    ALT:"Charles Darwin",
},
];

const Gallery = () =>{
    return (
        <section>
            <h1>Cientificos importantes</h1>
            <Profile
            url ={"https://invdes.com.mx/wp-content/uploads/2017/12/06-12-17-curie.jpg"

            }
            textoAlternativo ={"MarieCurie"}
            />
            <Profile
            url={"https://upload.wikimedia.org/wikipedia/commons/f/f1/Charles_Darwin_portrait.jpg"}
            textoAlternativo={"Charles Darwin"}
            
            />
             <Profile />
             <hr/>
             {datos.map((dato) =>(
                <Profile key={dato.URL}textoAlternativo={dato.ALT}/>
             ))}
        </section>
    );
};
export default Gallery