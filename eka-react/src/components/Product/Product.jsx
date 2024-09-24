// export default function Product(props) {
//     return (
//         <li>
//             <img src={props.img} alt={props.title} />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </li>
//     );
// }
// deconstructuring
export default function Product({img, title, description}) {
    // shift+alt+f
    return (
        <li>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}