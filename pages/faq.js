import FAQScreen from "../src/screens/FaqScreen";

export default FAQScreen; 

export async function getStaticProps() {
    const res = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
    const faq = await res.json()
    return { props: { faq } }
}

// import { Link } from "../src/components/Link";

// export async function getStaticProps() {
//     const res = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
//     const faq = await res.json()
//     return { props: { faq } }
// }

// export default function faqPage ({faq}) {
//     return (
//         <div>
//             <h1>Doce de abobora</h1>
//             <Link href="/">ir para home</Link>
//             <ul>
//                 {faq.map(({answer, question}, i) => (
//                    <li key={i}>
//                     <article>
//                         <h2>{question}</h2>
//                         <p>{answer}</p>
//                     </article>
//                     </li> 
//                 ))}
//             </ul>
//         </div>
//     )
// }